import styles from "./EducationEmployment.module.scss";

interface EducationEmploymentProps {
  data: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
}
function EducationEmployment({ data }: EducationEmploymentProps) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Education and Employment</h3>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label className={styles.label}>LEVEL OF EDUCATION</label>
          <p className={styles.value}>{data.levelOfEducation}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>EMPLOYMENT STATUS</label>
          <p className={styles.value}>{data.employmentStatus}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>SECTOR OF EMPLOYMENT</label>
          <p className={styles.value}>{data.sectorOfEmployment}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>DURATION OF EMPLOYMENT</label>
          <p className={styles.value}>{data.durationOfEmployment}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>OFFICE EMAIL</label>
          <p className={styles.value}>{data.officeEmail}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>MONTHLY INCOME</label>
          <p className={styles.value}>{data.monthlyIncome}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>LOAN REPAYMENT</label>
          <p className={styles.value}>{data.loanRepayment}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationEmployment;
