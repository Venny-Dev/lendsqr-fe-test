import { useState } from "react";
import styles from "./UserDetails.module.scss";
import UserHeader from "../../components/UserDetails/UserHeader/UserHeader";
import UserProfileCard from "../../components/UserDetails/UserProfileCard/UserProfileCard";
import UserTabs from "../../components/UserDetails/UserTabs/UserTabs";
import PersonalInformation from "../../components/UserDetails/PersonalInformation/PersonalInformation";
import EducationEmployment from "../../components/UserDetails/EducationEmployment/EducationEmployment";
import Socials from "../../components/UserDetails/Socials/Socials";
import Guarantor from "../../components/UserDetails/Guarantor/Guarantor";

const userData = {
  name: "Grace Effiom",
  id: "LSQF587g90",
  rating: 1.5,
  tier: "User's Tier",
  balance: "₦200,000.00",
  bankAccount: "9912345678/Providus Bank",
  personalInfo: {
    fullName: "Grace Effiom",
    phoneNumber: "07060780922",
    email: "grace@gmail.com",
    bvn: "07060780922",
    gender: "Female",
    maritalStatus: "Single",
    children: "None",
    typeOfResidence: "Parent's Apartment",
  },
  education: {
    levelOfEducation: "B.Sc",
    employmentStatus: "Employed",
    sectorOfEmployment: "FinTech",
    durationOfEmployment: "2 years",
    officeEmail: "grace@lendsqr.com",
    monthlyIncome: "₦200,000.00- ₦400,000.00",
    loanRepayment: "40,000",
  },
  socials: {
    twitter: "@grace_effiom",
    facebook: "Grace Effiom",
    instagram: "@grace_effiom",
  },
  guarantors: [
    {
      fullName: "Debby Ogana",
      phoneNumber: "07060780922",
      email: "debby@gmail.com",
      relationship: "Sister",
    },
  ],
};
function UserDetails() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div>
      <UserHeader />
      <UserProfileCard userData={userData} />
      <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className={styles.content}>
        <PersonalInformation data={userData.personalInfo} />
        <EducationEmployment data={userData.education} />
        <Socials data={userData.socials} />
        <div>
          <h3 className={styles.sectionTitle}>Guarantor</h3>
          {userData.guarantors.map((guarantor, index) => (
            <Guarantor key={index} data={guarantor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
