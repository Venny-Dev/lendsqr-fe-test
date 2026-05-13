import styles from "./StatsCard.module.scss";

interface StatsCardProps {
  icon: string;
  label: string;
  value: number | string;
  iconBg: string;
}

function StatsCard({ icon, label, value, iconBg }: StatsCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper} style={{ background: iconBg }}>
        {/* {icon} */}
        <img src={icon} alt="" />
      </div>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default StatsCard;
