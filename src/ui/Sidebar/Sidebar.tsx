import { useState } from "react";

import styles from "./Sidebar.module.scss";
import { menuSections } from "../../utils/data";

function Sidebar() {
  const [isCollapsed] = useState(false);

  return (
    <aside
      className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}
    >
      <div className={styles.sidebarContent}>
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={styles.menuSection}>
            {section.title && (
              <div className={styles.sectionTitle}>{section.title}</div>
            )}
            <ul className={styles.menuList}>
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={`${styles.menuItem} ${
                    item.active ? styles.active : ""
                  }`}
                >
                  <p className={styles.icon}>
                    <item.icon size={20} /> {/* Render as component */}
                  </p>
                  <span className={styles.label}>{item.label}</span>
                  {item.label === "Switch Organization" && (
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      className={styles.dropdown}
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
