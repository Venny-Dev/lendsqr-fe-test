import styles from "./Socials.module.scss";

interface SocialsProps {
  data: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
}

function Socials({ data }: SocialsProps) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Socials</h3>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label className={styles.label}>TWITTER</label>
          <p className={styles.value}>{data.twitter}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>FACEBOOK</label>
          <p className={styles.value}>{data.facebook}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>INSTAGRAM</label>
          <p className={styles.value}>{data.instagram}</p>
        </div>
      </div>
    </div>
  );
}

export default Socials;
