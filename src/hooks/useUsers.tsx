import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  changeStatus as changeStatusApi,
  getUserById,
  getUsers,
} from "../services/apiEndpoint";
import usePaginateData from "./usePaginateData";
import type { User } from "../utils/types";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export function useUsers() {
  const [searchParams] = useSearchParams();

  const {
    data: dataApi,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  const isDataApiArray = Array.isArray(dataApi);

  const activeUsers = useMemo(() => {
    if (isDataApiArray) {
      return dataApi.filter((user: any) => user.status === "Active").length;
    }
    return 0;
  }, [dataApi, isDataApiArray]);

  const filteredData = useMemo(() => {
    if (!Array.isArray(dataApi)) return [];

    let result = [...dataApi];

    // Get all filter params
    const filters = {
      username: searchParams.get("username"),
      email: searchParams.get("email"),
      status: searchParams.get("status"),
      organization: searchParams.get("organization"),
      phoneNumber: searchParams.get("phoneNumber"),
      date: searchParams.get("date"),
    };

    // Apply username filter
    if (filters.username) {
      result = result.filter((user: User) =>
        user.username.toLowerCase().includes(filters.username!.toLowerCase())
      );
    }

    // Apply email filter
    if (filters.email) {
      result = result.filter((user: User) =>
        user.email.toLowerCase().includes(filters.email!.toLowerCase())
      );
    }

    // Apply status filter (case-insensitive)
    if (filters.status) {
      result = result.filter(
        (user: User) =>
          user.status.toLowerCase() === filters.status!.toLowerCase()
      );
    }

    // Apply organization filter
    if (filters.organization) {
      result = result.filter((user: User) =>
        user.organization
          .toLowerCase()
          .includes(filters.organization!.toLowerCase())
      );
    }

    // Apply phone number filter
    if (filters.phoneNumber) {
      result = result.filter((user: User) =>
        user.phoneNumber.includes(filters.phoneNumber!)
      );
    }

    // Apply date filter
    if (filters.date) {
      result = result.filter((user: User) => {
        const userDate = new Date(user.dateJoined);
        const filterDate = new Date(filters.date!);

        // Compare dates
        return (
          userDate.getFullYear() === filterDate.getFullYear() &&
          userDate.getMonth() === filterDate.getMonth() &&
          userDate.getDate() === filterDate.getDate()
        );
      });
    }

    return result;
  }, [dataApi, searchParams]);

  const {
    paginatedData,
    pageCount,
    isPagination,
    totalItems: totalUsers,
    pageSize,
  } = usePaginateData(filteredData);

  if (isLoading) {
    return { paginatedData: null, isLoading: true, isError: false };
  }

  return {
    paginatedData,
    isLoading,
    isError,
    pageCount,
    isPagination,
    totalUsers: totalUsers || 0,
    activeUsers,
    pageSize: pageSize || 0,
  };
}

export function useUser(id: string | null) {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id!),
    enabled: !!id,
  });

  // console.log(user);
  return { user, isLoading };
}

export function useChangeUserStatus() {
  const queryClient = useQueryClient();
  const { mutate: changeStatus, isPending } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: User }) =>
      changeStatusApi(id, data),
    onMutate: () => {
      const toastId = toast.loading("Updating user status...");
      return { toastId };
    },
    onSuccess: (_, __, context) => {
      toast.dismiss(context?.toastId);
      toast.success("User status updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error, _, context) => {
      toast.dismiss(context?.toastId);
      toast.error(`Failed to update status: ${error.message}`);
    },
  });

  return { changeStatus, isPending };
}
