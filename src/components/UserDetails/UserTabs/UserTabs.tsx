import styles from "./UserTabs.module.scss";

interface UserTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

function UserTabs({ activeTab, setActiveTab }: UserTabsProps) {
  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${
              activeTab === tab.toLowerCase().replace(" ", "")
                ? styles.active
                : ""
            }`}
            onClick={() => setActiveTab(tab.toLowerCase().replace(" ", ""))}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default UserTabs;
