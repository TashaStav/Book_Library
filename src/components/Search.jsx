import { useDebounce } from "../hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setSearch } from "../features/search/searchSlice";

export function Search() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const debounced = useDebounce(search, 500);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Введите название книги"
      />
      <p style={{ fontSize: 12 }}>Поиск: {debounced}</p>
    </div>
  );
}
