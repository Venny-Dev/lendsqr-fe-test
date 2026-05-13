export function calculatePaginationButtons(
  pageCount: number,
  currentPage: number
) {
  const paginationButtons: (string | number)[] = [];
  // console.log(pageCount);

  if (pageCount <= 4) {
    // Show all pages if the total number is 4 or fewer
    for (let i = 1; i <= pageCount; i++) paginationButtons.push(i);
    return paginationButtons;
  }

  if (currentPage === 1) {
    // On the first page: 1, 2, ..., lastPage
    paginationButtons.push(1, 2, "...", pageCount - 1, pageCount);
  } else if (currentPage === 2) {
    // On the second page: 2, 3, ..., lastPage
    paginationButtons.push(2, 3, "...", pageCount - 1, pageCount);
  } else if (currentPage >= pageCount - 1) {
    // Near the last page: ..., pageCount-2, pageCount-1, lastPage
    paginationButtons.push("...", pageCount - 2, pageCount - 1, pageCount);
  } else {
    // Middle pages: ..., currentPage, currentPage+1, ..., lastPage
    paginationButtons.push(
      "...",
      currentPage,
      currentPage + 1,
      currentPage + 2,
      "...",
      pageCount - 2,
      pageCount - 1,
      pageCount
    );
  }

  return paginationButtons;
}
