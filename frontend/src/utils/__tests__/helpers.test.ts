import { describe, it, expect } from "vitest";
import { calculatePaginationButtons } from "../helpers";

describe("calculatePaginationButtons", () => {
  describe("Positive Scenarios", () => {
    it("should return all pages when pageCount <= 4", () => {
      const result = calculatePaginationButtons(4, 1);
      expect(result).toEqual([1, 2, 3, 4]);
    });

    it("should return correct buttons for first page with many pages", () => {
      const result = calculatePaginationButtons(10, 1);
      expect(result).toEqual([1, 2, "...", 10]);
    });

    it("should return correct buttons for second page", () => {
      const result = calculatePaginationButtons(10, 2);
      expect(result).toEqual([2, 3, "...", 10]);
    });

    it("should return correct buttons for middle pages", () => {
      const result = calculatePaginationButtons(10, 5);
      expect(result).toEqual(["...", 5, 6, 10]);
    });

    it("should return correct buttons for last page", () => {
      const result = calculatePaginationButtons(10, 10);
      expect(result).toEqual(["...", 8, 9, 10]);
    });

    it("should return correct buttons for second-to-last page", () => {
      const result = calculatePaginationButtons(10, 9);
      expect(result).toEqual(["...", 8, 9, 10]);
    });
  });

  describe("Negative Scenarios", () => {
    it("should handle single page", () => {
      const result = calculatePaginationButtons(1, 1);
      expect(result).toEqual([1]);
    });

    it("should handle zero pages gracefully", () => {
      const result = calculatePaginationButtons(0, 1);
      expect(result).toEqual([]);
    });

    it("should handle current page beyond pageCount", () => {
      const result = calculatePaginationButtons(5, 10);
      expect(result).toEqual(["...", 3, 4, 5]);
    });

    it("should handle negative pageCount", () => {
      const result = calculatePaginationButtons(-5, 1);
      expect(result).toEqual([]);
    });
  });

  describe("Edge Cases", () => {
    it("should handle exactly 4 pages", () => {
      const result = calculatePaginationButtons(4, 2);
      expect(result).toEqual([1, 2, 3, 4]);
    });

    it("should handle exactly 5 pages on first page", () => {
      const result = calculatePaginationButtons(5, 1);
      expect(result).toEqual([1, 2, "...", 5]);
    });
  });
});
