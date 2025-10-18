import { useSearchParams } from "react-router";
import { PAGE_SIZE } from "../utils/constants";

function usePaginateData(filteredData: any) {
  const [searchParams] = useSearchParams();
  const pageSize = localStorage.getItem("pageSize") || PAGE_SIZE;
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const from = (page - 1) * +pageSize;
  const to = page * +pageSize;

  const isFilteredDataArray = Array.isArray(filteredData);

  const paginatedData =
    isFilteredDataArray && filteredData?.length > +pageSize
      ? filteredData?.slice(from, to)
      : filteredData;

  const totalItems = isFilteredDataArray ? filteredData.length : 0;
  const pageCount = Math.ceil(totalItems / +pageSize) || 0;
  const isPagination = pageCount > 1;

  return {
    paginatedData,
    pageCount,
    isPagination,
    totalItems,
    pageSize: +pageSize,
  };
}

export default usePaginateData;
