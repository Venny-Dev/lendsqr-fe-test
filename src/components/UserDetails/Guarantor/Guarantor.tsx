import styles from "./Guarantor.module.scss";

interface GuarantorProps {
  data: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}

function Guarantor({ data }: GuarantorProps) {
  return (
    <div className={styles.guarantor}>
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
          <label className={styles.label}>RELATIONSHIP</label>
          <p className={styles.value}>{data.relationship}</p>
        </div>
      </div>
    </div>
  );
}

export default Guarantor;
