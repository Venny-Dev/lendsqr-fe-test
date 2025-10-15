import styles from "./Pagination.module.scss";

interface PaginationProps {
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

function Pagination({
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationLeft}>
        <span>Showing</span>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className={styles.select}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>out of 100</span>
      </div>

      <div className={styles.paginationRight}>
        <button className={styles.pageButton} disabled={currentPage === 1}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        <button
          className={`${styles.pageNumber} ${
            currentPage === 1 ? styles.active : ""
          }`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>
        <button
          className={`${styles.pageNumber} ${
            currentPage === 2 ? styles.active : ""
          }`}
          onClick={() => setCurrentPage(2)}
        >
          2
        </button>
        <button
          className={`${styles.pageNumber} ${
            currentPage === 3 ? styles.active : ""
          }`}
          onClick={() => setCurrentPage(3)}
        >
          3
        </button>
        <span className={styles.ellipsis}>...</span>
        <button
          className={styles.pageNumber}
          onClick={() => setCurrentPage(15)}
        >
          15
        </button>
        <button
          className={styles.pageNumber}
          onClick={() => setCurrentPage(16)}
        >
          16
        </button>

        <button className={styles.pageButton}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
