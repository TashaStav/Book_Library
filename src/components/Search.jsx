import { useDebounce } from "../hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setSearch } from "../features/search/searchSlice";
import { useCallback } from "react";

export function Search() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const debounced = useDebounce(search, 500);

  const handleChange = useCallback((e) => {
    dispatch(setSearch(e.target.value));
  }, [dispatch]);

  return (
    <div>
      <input
        value={search}
        onChange={handleChange}
        placeholder="Введите название книги"
      />
      <p style={{ fontSize: 12 }}>Поиск: {debounced}</p>
    </div>
  );
}
