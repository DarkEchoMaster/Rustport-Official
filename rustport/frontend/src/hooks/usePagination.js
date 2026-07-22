import { useMemo, useState } from "react";
export default function usePagination(items = [], perPage = 15) {
  const [page, setPage] = useState(1);
  return {
    page, setPage,
    pageCount: Math.max(1, Math.ceil(items.length / perPage)),
    pageItems: useMemo(() => items.slice((page - 1) * perPage, page * perPage), [items, page, perPage])
  };
}
