import type { LucideIcon } from "lucide-react";

export interface User {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
}

interface MenuItem {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

export interface MenuSection {
  title?: string;
  items: MenuItem[];
}
