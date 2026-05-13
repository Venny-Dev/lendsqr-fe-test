import styles from "./PersonalInformation.module.scss";
import type { UserDetails } from "../../../utils/types";

interface PersonalInformationProps {
  data: UserDetails["personalInfo"];
}

function PersonalInformation({ data }: PersonalInformationProps) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Personal Information</h3>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label className={styles.label}>FULL NAME</label>
          <p className={styles.value}>{data.fullName}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>PHONE NUMBER</label>
          <p className={styles.value}>{data.phoneNumber}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>EMAIL ADDRESS</label>
          <p className={styles.value}>{data.email}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>BVN</label>
          <p className={styles.value}>{data.bvn}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>GENDER</label>
          <p className={styles.value}>{data.gender}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>MARITAL STATUS</label>
          <p className={styles.value}>{data.maritalStatus}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>CHILDREN</label>
          <p className={styles.value}>{data.children}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>TYPE OF RESIDENCE</label>
          <p className={styles.value}>{data.typeOfResidence}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
