import { useRef, useState } from "react";
import styles from "./UsersTable.module.scss";
import Pagination from "../../ui/Pagination/Pagination";
import ActionMenu from "../../ui/ActionMenu/ActionMenu";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import { useNavigate } from "react-router-dom";
import type { User } from "../../utils/types";
import { useChangeUserStatus } from "../../hooks/useUsers";

interface UsersTableProps {
  data: {
    itemsPerPage: number;
    setItemsPerPage: (value: number) => void;
    users: User[];
    pageCount: number;
  };
}

function UsersTable({ data }: UsersTableProps) {
  const navigate = useNavigate();
  const { changeStatus } = useChangeUserStatus();

  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const { itemsPerPage, setItemsPerPage, users, pageCount } = data;
  const filterButtonRef = useRef<HTMLButtonElement>(null);

  const getStatusClass = (status: string) => {
    return styles[status.toLowerCase()];
  };

  const handleViewDetails = (user: User) => {
    navigate(`/users/${user.id}`);
    setActiveMenuIndex(null);
  };

  const handleChangeStatus = (newStatus: string, user: User) => {
    const data: User = {
      ...user,
      status: newStatus,
    };
    setActiveMenuIndex(null);
    changeStatus({ id: user.id, data });
  };

  return (
    <>
      <div className={styles.tableContainer}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>
                  <div className={styles.headerContent}>
                    <span>ORGANIZATION</span>
                    <button
                      className={styles.filterButton}
                      onClick={() => setShowFilterPanel(!showFilterPanel)}
                      ref={filterButtonRef}
                    >
                      <img src="/filter-results-button.png" alt="" />
                    </button>
                    {showFilterPanel &&
                      filterButtonRef.current && ( // ADD NULL CHECK
                        <FilterPanel
                          onClose={() => setShowFilterPanel(false)}
                          triggerRef={filterButtonRef}
                        />
                      )}{" "}
                  </div>
                </th>
                <th>
                  <div className={styles.headerContent}>
                    <span>USERNAME</span>
                    <button className={styles.filterButton}>
                      <img src="/filter-results-button.png" alt="" />
                    </button>
                  </div>
                </th>
                <th>
                  <div className={styles.headerContent}>
                    <span>EMAIL</span>
                    <button className={styles.filterButton}>
                      <img src="/filter-results-button.png" alt="" />
                    </button>
                  </div>
                </th>
                <th>
                  <div className={styles.headerContent}>
                    <span>PHONE NUMBER</span>
                    <button className={styles.filterButton}>
                      <img src="/filter-results-button.png" alt="" />
                    </button>
                  </div>
                </th>
                <th>
                  <div className={styles.headerContent}>
                    <span>DATE JOINED</span>
                    <button className={styles.filterButton}>
                      <img src="/filter-results-button.png" alt="" />
                    </button>
                  </div>
                </th>
                <th>
                  <div className={styles.headerContent}>
                    <span>STATUS</span>
                    <button className={styles.filterButton}>
                      <img src="/filter-results-button.png" alt="" />
                    </button>
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.organization}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.dateJoined}</td>
                  <td>
                    <span
                      className={`${styles.status} ${getStatusClass(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className={styles.menuButton}
                      onClick={() => setActiveMenuIndex(index)}
                    >
                      <img src="/action-icon.png" alt="menu" />
                    </button>
                    {activeMenuIndex === index && (
                      <ActionMenu
                        onClose={() => setActiveMenuIndex(null)}
                        onViewDetails={() => handleViewDetails(user)}
                        onHandleChangeStatus={handleChangeStatus}
                        user={user}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        pageCount={pageCount}
      />
    </>
  );
}

export default UsersTable;
