import { useFetch } from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";
import { BookCard } from "./BookCard";
import { getBooksUrl } from "../utils/getBookUrl";

export function BookList({ search }) {
  const debouncedSearch = useDebounce(search, 500);
  const { data, loading, error } = useFetch(getBooksUrl(debouncedSearch));
  const books = data?.docs || [];

  return (
    <div>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
      {!loading && debouncedSearch.length >= 3 && books.length === 0 && (
        <p>Ничего не найдено</p>
      )}
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}
