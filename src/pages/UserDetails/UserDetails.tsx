import { useState } from "react";
import styles from "./UserDetails.module.scss";
import UserHeader from "../../components/UserDetails/UserHeader/UserHeader";
import UserProfileCard from "../../components/UserDetails/UserProfileCard/UserProfileCard";
import type { UserDetails as IUserDetails } from "../../utils/types";
import UserTabs from "../../components/UserDetails/UserTabs/UserTabs";
import PersonalInformation from "../../components/UserDetails/PersonalInformation/PersonalInformation";
import EducationEmployment from "../../components/UserDetails/EducationEmployment/EducationEmployment";
import Socials from "../../components/UserDetails/Socials/Socials";
import Guarantor from "../../components/UserDetails/Guarantor/Guarantor";
import { useParams } from "react-router";
import { useUser } from "../../hooks/useUsers";
import SkelentonLoader from "../../ui/SkelentonLoader";

function UserDetails() {
  const { id } = useParams<{ id: string }>();
  type TabType =
    | "generaldetails"
    | "documents"
    | "bank"
    | "loans"
    | "savings"
    | "apps";

  const [activeTab, setActiveTab] = useState<TabType>("generaldetails");
  const { user, isLoading } = useUser(id!);
  const userData = user as IUserDetails | undefined;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as TabType);
  };

  return (
    <div>
      <UserHeader />
      {isLoading && <SkelentonLoader />}
      {userData && (
        <>
          <UserProfileCard userData={userData} />
          <UserTabs activeTab={activeTab} setActiveTab={handleTabChange} />

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
        </>
      )}
    </div>
  );
}

export default UserDetails;
