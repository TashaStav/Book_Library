import { useAppSelector } from "../app/hooks";
import { Search } from "../components/Search";
import { BookList } from "../components/BookList";

export default function HomePage() {
  const search = useAppSelector((state) => state.search.search);

  return (
    <div>
      <Search />
      <BookList search={search} />
    </div>
  );
}
