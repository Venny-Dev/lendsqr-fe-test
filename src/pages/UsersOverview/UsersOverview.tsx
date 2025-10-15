import UsersTable from "../../components/UsersTable/UsersTable";
import StatsCard from "../../ui/StatsCard.tsx/StatsCard";
import styles from "./UsersOverview.module.scss";

function UsersOverview() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Users</h1>
      <div className={styles.statsGrid}>
        <StatsCard
          icon={"/icon.png"}
          label="USERS"
          value="2,453"
          iconBg="rgba(223, 24, 255, 0.1)"
        />

        <StatsCard
          icon={"/icon-1.png"}
          label="ACTIVE USERS"
          value="2,453"
          iconBg="rgba(87, 24, 255, 0.1)"
        />

        <StatsCard
          icon={"/icon-2.png"}
          label="USERS WITH LOANS"
          value="12,453"
          iconBg="rgba(245, 95, 68, 0.1)"
        />

        <StatsCard
          icon={"/icon-3.png"}
          label="USERS WITH SAVINGS"
          value="102,453"
          iconBg="rgba(255, 51, 102, 0.1)"
        />
      </div>
      <UsersTable />
    </div>
  );
}

export default UsersOverview;
