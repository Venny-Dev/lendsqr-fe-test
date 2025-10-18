import { useState } from "react";
import styles from "./Header.module.scss";
import { Bell, Search, ChevronDown } from "lucide-react";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="/logo.svg"
          alt="lendsqr"
          className={styles.logo}
          width={125}
          height={125}
        />
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for anything"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <Search
            style={{
              width: "14px",
              height: "14px",
              color: "#fff",
            }}
          />
        </button>
      </div>

      <div className={styles.headerRight}>
        <a href="#" className={styles.docsLink}>
          Docs
        </a>
        <button className={styles.notificationButton}>
          <Bell style={{ width: "20px", height: "20px", color: "#213F7D" }} />
        </button>
        <div className={styles.userProfile}>
          <img src="/avatar.png" alt="User" className={styles.avatar} />
          <span className={styles.userName}>Adedeji</span>
          <ChevronDown style={{ color: "#213F7D" }} />
        </div>
      </div>
    </header>
  );
}

export default Header;
