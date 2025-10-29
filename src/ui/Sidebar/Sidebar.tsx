import { useState } from "react";

import styles from "./Sidebar.module.scss";
import { menuSections } from "../../utils/data";
import { ChevronDown } from "lucide-react";

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
                    {/* <item.icon size={20} /> */}
                    {item.icon && <img src={item.icon} alt="" />}
                  </p>
                  <span className={styles.label}>{item.label}</span>
                  {item.label === "Switch Organization" && <ChevronDown />}
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
