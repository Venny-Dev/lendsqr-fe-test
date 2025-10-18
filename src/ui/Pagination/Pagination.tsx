import { useSearchParams } from "react-router";
import styles from "./Pagination.module.scss";
import { calculatePaginationButtons } from "../../utils/helpers";

interface PaginationProps {
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
  pageCount: number;
}

function Pagination({
  itemsPerPage,
  setItemsPerPage,
  pageCount,
}: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  }
  const paginationButtons = calculatePaginationButtons(pageCount, currentPage);
  // console.log(pageCount);
  function handleItemsPerpage(e: React.ChangeEvent<HTMLSelectElement>) {
    // console.log(e.target.value);
    setItemsPerPage(Number(e.target.value));
    localStorage.setItem("pageSize", e.target.value);
    setSearchParams((prev) => {
      prev.set("page", "1");
      return prev;
    });
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.paginationLeft}>
        <span>Per page</span>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerpage}
          className={styles.select}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        {/* <span>out of {pageCount}</span> */}
      </div>

      <div className={styles.paginationRight}>
        <button
          className={styles.pageButton}
          disabled={currentPage === 1}
          onClick={prevPage}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        {paginationButtons.map((page) => (
          <button
            className={`${styles.pageNumber} ${
              currentPage === page ? styles.active : ""
            }`}
            key={page}
            onClick={() => {
              if (typeof page === "number") {
                searchParams.set("page", page.toString());
                setSearchParams(searchParams);
              }
            }}
            disabled={typeof page !== "number"}
          >
            {page}
          </button>
        ))}

        <button className={styles.pageButton} onClick={nextPage}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
