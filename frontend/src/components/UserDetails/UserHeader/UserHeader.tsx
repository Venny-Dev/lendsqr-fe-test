import { useNavigate, useParams } from "react-router";
import styles from "./UserHeader.module.scss";
import type { User } from "../../../utils/types";
import { useChangeUserStatus } from "../../../hooks/useUsers";
import { getUsers } from "../../../services/apiEndpoint";
import { useQuery } from "@tanstack/react-query";

function UserHeader() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { changeStatus } = useChangeUserStatus();

  const { data: usersResponse } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
  const cachedUser = usersResponse?.data?.find(
    (user: User) => String(user.id) === id
  );

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
        <img src="/backbtn.png" alt="back" />
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
