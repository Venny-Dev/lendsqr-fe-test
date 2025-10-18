import { useEffect, useRef } from "react";
import styles from "./ActionMenu.module.scss";
import type { User } from "../../utils/types";
import { Eye, User2, UserRoundX } from "lucide-react";

interface ActionMenuProps {
  onClose: () => void;
  onViewDetails: () => void;
  onHandleChangeStatus?: (status: string, user: User) => void;
  user: User;
}

function ActionMenu({
  onClose,
  onViewDetails,
  onHandleChangeStatus,
  user,
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
        <Eye />
        View Details
      </button>
      {user.status?.toLocaleLowerCase() !== "blacklisted" && (
        <button
          className={`${styles.menuItem} ${
            user.status?.toLocaleLowerCase() === "blacklisted"
              ? styles.disabled
              : ""
          }`}
          onClick={() => onHandleChangeStatus?.("Blacklisted", user)}
          disabled={user.status?.toLocaleLowerCase() === "blacklisted"}
        >
          <UserRoundX />
          Blacklist User
        </button>
      )}
      {user.status?.toLocaleLowerCase() !== "active" &&
        user.status?.toLocaleLowerCase() !== "inactive" &&
        user.status?.toLocaleLowerCase() !== "pending" && (
          <button
            className={`${styles.menuItem} ${
              user.status?.toLocaleLowerCase() === "active"
                ? styles.disabled
                : ""
            }`}
            onClick={() => onHandleChangeStatus?.("Active", user)}
            disabled={user.status?.toLocaleLowerCase() === "active"}
          >
            <User2 />
            Activate User
          </button>
        )}
    </div>
  );
}

export default ActionMenu;
