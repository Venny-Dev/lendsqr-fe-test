import { useState } from "react";
import styles from "./UsersTable.module.scss";
import Pagination from "../../ui/Pagination/Pagination";
import type { FilterValues } from "../../ui/FilterPanel/FilterPanel";
import ActionMenu from "../../ui/ActionMenu/ActionMenu";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import { useNavigate } from "react-router-dom";
import { mockUsers } from "../../utils/data";

function UsersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(100);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const navigate = useNavigate();

  const getStatusClass = (status: string) => {
    return styles[status.toLowerCase()];
  };

  const handleViewDetails = (index: number) => {
    console.log("View details for user:", mockUsers[index]);
    navigate(`/users/${index + 1}`);
    setActiveMenuIndex(null);
  };

  const handleBlacklist = (index: number) => {
    console.log("Blacklist user:", mockUsers[index]);
    setActiveMenuIndex(null);
  };

  const handleActivate = (index: number) => {
    console.log("Activate user:", mockUsers[index]);
    setActiveMenuIndex(null);
  };

  const handleFilter = (filters: FilterValues) => {
    console.log("Apply filters:", filters);
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
                    >
                      <img src="/filter-results-button.png" alt="" />
                    </button>
                    {showFilterPanel && (
                      <FilterPanel
                        onClose={() => setShowFilterPanel(false)}
                        onFilter={handleFilter}
                      />
                    )}
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
              {mockUsers.map((user, index) => (
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
                      <svg width="4" height="16" viewBox="0 0 4 16" fill="none">
                        <circle cx="2" cy="2" r="2" fill="#545F7D" />
                        <circle cx="2" cy="8" r="2" fill="#545F7D" />
                        <circle cx="2" cy="14" r="2" fill="#545F7D" />
                      </svg>
                    </button>
                    {activeMenuIndex === index && (
                      <ActionMenu
                        onClose={() => setActiveMenuIndex(null)}
                        onViewDetails={() => handleViewDetails(index)}
                        onBlacklist={() => handleBlacklist(index)}
                        onActivate={() => handleActivate(index)}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination controls can be added here in the future */}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default UsersTable;
