import { useState } from "react";
import styles from "./Header.module.scss";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path
            d="M0 5.5C0 2.46243 2.46243 0 5.5 0H19.5C22.5376 0 25 2.46243 25 5.5V19.5C25 22.5376 22.5376 25 19.5 25H5.5C2.46243 25 0 22.5376 0 19.5V5.5Z"
            fill="#213F7D"
          />
          <path d="M7 7H11V18H7V7Z" fill="#39CDCC" />
          <circle cx="15.5" cy="12.5" r="3.5" fill="#39CDCC" />
        </svg>
        <span className={styles.logoText}>lendsqr</span>
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
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11C6.74423 11 7.8859 10.5578 8.7844 9.8156L12.4844 13.5156C12.7844 13.8156 13.2844 13.8156 13.5844 13.5156C13.8844 13.2156 13.8844 12.7156 13.5844 12.4156L9.8844 8.7156C10.6266 7.8171 11.0688 6.67543 11.0688 5.43121C11.0688 2.39364 8.60636 -0.0688171 5.56879 -0.0688171L5.5 0ZM5.5 1.5C7.98528 1.5 10 3.51472 10 6C10 8.48528 7.98543 10.5 5.5 10.5C3.01472 10.5 1 8.48528 1 6C1 3.51472 3.01472 1.5 5.5 1.5Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className={styles.headerRight}>
        <a href="#" className={styles.docsLink}>
          Docs
        </a>
        <button className={styles.notificationButton}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 0C8.89543 0 8 0.89543 8 2V2.29C5.16229 3.07 3 5.69 3 8.8V13L1 15V16H19V15L17 13V8.8C17 5.69 14.8377 3.07 12 2.29V2C12 0.89543 11.1046 0 10 0ZM10 20C11.1046 20 12 19.1046 12 18H8C8 19.1046 8.89543 20 10 20Z"
              fill="#213F7D"
            />
          </svg>
        </button>
        <div className={styles.userProfile}>
          <img src="/avatar.png" alt="User" className={styles.avatar} />
          <span className={styles.userName}>Adedeji</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#213F7D" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
