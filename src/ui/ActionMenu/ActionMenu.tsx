import { useEffect, useRef } from "react";
import styles from "./ActionMenu.module.scss";

interface ActionMenuProps {
  onClose: () => void;
  onViewDetails: () => void;
  onBlacklist: () => void;
  onActivate: () => void;
}

function ActionMenu({
  onClose,
  onViewDetails,
  onBlacklist,
  onActivate,
}: ActionMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);
  return (
    <div className={styles.actionMenu} ref={menuRef}>
      <button className={styles.menuItem} onClick={onViewDetails}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 3C4.5 3 1.5 5.73 0.5 8C1.5 10.27 4.5 13 8 13C11.5 13 14.5 10.27 15.5 8C14.5 5.73 11.5 3 8 3ZM8 11C6.34 11 5 9.66 5 8C5 6.34 6.34 5 8 5C9.66 5 11 6.34 11 8C11 9.66 9.66 11 8 11ZM8 6.5C7.17 6.5 6.5 7.17 6.5 8C6.5 8.83 7.17 9.5 8 9.5C8.83 9.5 9.5 8.83 9.5 8C9.5 7.17 8.83 6.5 8 6.5Z"
            fill="#545F7D"
          />
        </svg>
        View Details
      </button>
      <button className={styles.menuItem} onClick={onBlacklist}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 4C9.1 4 10 4.9 10 6C10 7.1 9.1 8 8 8C6.9 8 6 7.1 6 6C6 4.9 6.9 4 8 4ZM8 13.6C6 13.6 4.3 12.5 3.4 10.9C3.4 9.3 6.7 8.4 8 8.4C9.3 8.4 12.6 9.3 12.6 10.9C11.7 12.5 10 13.6 8 13.6Z"
            fill="#545F7D"
          />
        </svg>
        Blacklist User
      </button>
      <button className={styles.menuItem} onClick={onActivate}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 4C9.1 4 10 4.9 10 6C10 7.1 9.1 8 8 8C6.9 8 6 7.1 6 6C6 4.9 6.9 4 8 4ZM8 13.6C6 13.6 4.3 12.5 3.4 10.9C3.4 9.3 6.7 8.4 8 8.4C9.3 8.4 12.6 9.3 12.6 10.9C11.7 12.5 10 13.6 8 13.6Z"
            fill="#545F7D"
          />
        </svg>
        Activate User
      </button>
    </div>
  );
}

export default ActionMenu;
