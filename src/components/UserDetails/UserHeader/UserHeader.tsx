import { useNavigate, useParams } from "react-router";
import styles from "./UserHeader.module.scss";
import { useQueryClient } from "@tanstack/react-query";
import type { User } from "../../../utils/types";
import { useChangeUserStatus } from "../../../hooks/useUsers";

function UserHeader() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { changeStatus } = useChangeUserStatus();

  const queryClient = useQueryClient();
  const cachedUser = queryClient
    .getQueryData<User[]>(["users"])
    ?.find((user: User) => user.id === id);

  const handleChangeStatus = (newStatus: string, user: User) => {
    if (!user) return;
    const data: User = {
      ...user,
      status: newStatus,
    };

    changeStatus({ id: user.id, data });
  };

  return (
    <div className={styles.header}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
          <path
            d="M0.94997 5.35639C0.994502 5.47132 1.0613 5.5767 1.14684 5.66575L4.89684 9.41575C5.07263 9.5927 5.31285 9.69348 5.56248 9.69348C5.81211 9.69348 6.05233 9.5927 6.22812 9.41575C6.40508 9.23996 6.50586 8.99974 6.50586 8.75011C6.50586 8.50048 6.40508 8.26026 6.22812 8.08447L4.07187 5.93761H26.6562C27.1742 5.93761 27.5937 5.51809 27.5937 5.00011C27.5937 4.48213 27.1742 4.06261 26.6562 4.06261H4.07187L6.22812 1.91575C6.5961 1.54777 6.5961 0.952453 6.22812 0.584469C5.86014 0.216485 5.26482 0.216485 4.89684 0.584469L1.14684 4.33447C1.0613 4.42352 0.994502 4.5289 0.94997 4.64383C0.857365 4.87133 0.857365 5.12889 0.94997 5.35639Z"
            fill="#545F7D"
          />
        </svg>
        <span>Back to Users</span>
      </button>

      <div className={styles.headerContent}>
        <h1 className={styles.title}>User Details</h1>
        <div className={styles.actions}>
          {cachedUser?.status?.toLocaleLowerCase() !== "blacklisted" && (
            <button
              className={styles.blacklistBtn}
              onClick={() => handleChangeStatus("Blacklisted", cachedUser!)}
            >
              BLACKLIST USER
            </button>
          )}
          {cachedUser?.status?.toLocaleLowerCase() !== "active" &&
            cachedUser?.status?.toLocaleLowerCase() !== "inactive" &&
            cachedUser?.status?.toLocaleLowerCase() !== "pending" && (
              <button
                className={styles.activateBtn}
                onClick={() => handleChangeStatus("Active", cachedUser!)}
              >
                ACTIVATE USER
              </button>
            )}
        </div>
      </div>
    </div>
  );
}

export default UserHeader;
