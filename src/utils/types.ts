import type { LucideIcon } from "lucide-react";

export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
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

export interface FilterValues {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

export interface UserProfileType {
  name: string;
  id: string;
  rating: number;
  tier: string;
  balance: string;
  bankAccount: string;
}
export interface UserDetails {
  name: string;
  id: string;
  rating: number;
  tier: string;
  balance: string;
  bankAccount: string;
  personalInfo: {
    fullName: string;
    phoneNumber: string;
    email: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
  };
  education: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantors: Array<{
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  }>;
}
