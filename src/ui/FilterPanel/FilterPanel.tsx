import { useEffect, useRef, useState } from "react";
import styles from "./FilterPanel.module.scss";
import type { FilterValues } from "../../utils/types";
import { useSearchParams } from "react-router-dom";
import { createPortal } from "react-dom";

interface FilterPanelProps {
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

function FilterPanel({ onClose, triggerRef }: FilterPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [filters, setFilters] = useState<FilterValues>({
    organization: searchParams.get("organization") || "",
    username: searchParams.get("username") || "",
    email: searchParams.get("email") || "",
    date: searchParams.get("date") || "",
    phoneNumber: searchParams.get("phoneNumber") || "",
    status: searchParams.get("status") || "",
  });

  useEffect(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
    }
  }, [triggerRef]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, triggerRef]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newParams = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      }
    });

    newParams.set("page", "1");

    setSearchParams(newParams);
    onClose();
  };

  const handleReset = () => {
    const resetFilters = {
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    };

    setFilters(resetFilters);

    const newParams = new URLSearchParams();
    newParams.set("page", "1");
    setSearchParams(newParams);
    onClose();
  };

  function handleFilterChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof FilterValues
  ) {
    setFilters({ ...filters, [field]: e.target.value });
  }

  return createPortal(
    <div
      className={styles.filterPanel}
      ref={panelRef}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="organization">Organization</label>
          <select
            id="organization"
            value={filters.organization}
            onChange={(e) => handleFilterChange(e, "organization")}
          >
            <option value="">Select</option>
            <option value="lendsqr">Lendsqr</option>
            <option value="irorun">Irorun</option>
            <option value="lendstar">Lendstar</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="User"
            value={filters.username}
            onChange={(e) => handleFilterChange(e, "username")}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={filters.email}
            onChange={(e) => handleFilterChange(e, "email")}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            placeholder="Date"
            value={filters.date}
            onChange={(e) => handleFilterChange(e, "date")}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Phone Number"
            value={filters.phoneNumber}
            onChange={(e) => handleFilterChange(e, "phoneNumber")}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={filters.status}
            onChange={(e) => handleFilterChange(e, "status")}
          >
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
        </div>

        <div className={styles.buttonGroup}>
          <button
            type="button"
            className={styles.resetButton}
            onClick={handleReset}
          >
            Reset
          </button>
          <button type="submit" className={styles.filterButton}>
            Filter
          </button>
        </div>
      </form>
    </div>,
    document.body
  );
}

export default FilterPanel;
