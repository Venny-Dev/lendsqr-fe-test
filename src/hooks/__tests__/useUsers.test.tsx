import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUsers, useChangeUserStatus } from "../useUsers";
import * as apiEndpoint from "../../services/apiEndpoint";
import { BrowserRouter } from "react-router-dom";

vi.mock("../../services/apiEndpoint");

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
};

describe("useUsers Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  describe("Positive Scenarios", () => {
    it("should fetch users successfully", async () => {
      const mockUsers = [
        {
          id: "1",
          username: "john_doe",
          email: "john@example.com",
          organization: "Lendsqr",
          phoneNumber: "08012345678",
          dateJoined: "2024-01-01",
          status: "Active",
        },
        {
          id: "2",
          username: "jane_doe",
          email: "jane@example.com",
          organization: "Lendsqr",
          phoneNumber: "08087654321",
          dateJoined: "2024-01-02",
          status: "Inactive",
        },
      ];

      vi.mocked(apiEndpoint.getUsers).mockResolvedValue(mockUsers as any);

      const { result } = renderHook(() => useUsers(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      expect(result.current.paginatedData).toHaveLength(2);
      expect(result.current.activeUsers).toBe(1);
      expect(result.current.totalUsers).toBe(2);
    });

    it("should calculate active users correctly", async () => {
      const mockUsers = [
        {
          id: "1",
          status: "Active",
          username: "user1",
          email: "user1@test.com",
          organization: "Org1",
          phoneNumber: "123",
          dateJoined: "2024-01-01",
        },
        {
          id: "2",
          status: "Active",
          username: "user2",
          email: "user2@test.com",
          organization: "Org2",
          phoneNumber: "456",
          dateJoined: "2024-01-02",
        },
        {
          id: "3",
          status: "Inactive",
          username: "user3",
          email: "user3@test.com",
          organization: "Org3",
          phoneNumber: "789",
          dateJoined: "2024-01-03",
        },
      ];

      vi.mocked(apiEndpoint.getUsers).mockResolvedValue(mockUsers as any);

      const { result } = renderHook(() => useUsers(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      expect(result.current.activeUsers).toBe(2);
    });
  });

  describe("Negative Scenarios", () => {
    it("should handle API error", async () => {
      vi.mocked(apiEndpoint.getUsers).mockRejectedValue(new Error("API Error"));

      const { result } = renderHook(() => useUsers(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      expect(result.current.isError).toBe(true);
    });

    it("should handle empty data", async () => {
      vi.mocked(apiEndpoint.getUsers).mockResolvedValue([] as any);

      const { result } = renderHook(() => useUsers(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      expect(result.current.paginatedData).toEqual([]);
      expect(result.current.activeUsers).toBe(0);
      expect(result.current.totalUsers).toBe(0);
    });

    it("should handle null/undefined data", async () => {
      vi.mocked(apiEndpoint.getUsers).mockResolvedValue(null as any);

      const { result } = renderHook(() => useUsers(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      expect(result.current.activeUsers).toBe(0);
    });
  });
});

describe("useChangeUserStatus Hook", () => {
  it("should successfully change user status", async () => {
    const mockUser = {
      id: "1",
      username: "test_user",
      email: "test@example.com",
      organization: "Lendsqr",
      phoneNumber: "08012345678",
      dateJoined: "2024-01-01",
      status: "Active",
    };

    vi.mocked(apiEndpoint.changeStatus).mockResolvedValue(mockUser as any);

    const { result } = renderHook(() => useChangeUserStatus(), {
      wrapper: createWrapper(),
    });

    result.current.changeStatus({ id: "1", data: mockUser });

    await waitFor(() => expect(result.current.isPending).toBe(false));
  });

  it("should handle status change error", async () => {
    vi.mocked(apiEndpoint.changeStatus).mockRejectedValue(
      new Error("Update failed")
    );

    const { result } = renderHook(() => useChangeUserStatus(), {
      wrapper: createWrapper(),
    });

    const mockUser = {
      id: "1",
      username: "test_user",
      email: "test@example.com",
      organization: "Lendsqr",
      phoneNumber: "08012345678",
      dateJoined: "2024-01-01",
      status: "Blacklisted",
    };

    result.current.changeStatus({ id: "1", data: mockUser });

    await waitFor(() => expect(result.current.isPending).toBe(false));
  });
});
