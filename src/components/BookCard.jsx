import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { addFavorite } from "../features/favorites/favoritesSlice";

export function BookCard({ book }) {
  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>
        <Link to={`/book/${book.key.replace("/works/", "")}`}>
          {book.title}
        </Link>
      </h3>
      <p>Автор: {book.author_name?.[0] || "Неизвестен"}</p>
      <p>Год: {book.first_publish_year || "Неизвестен"}</p>
      <button onClick={() => dispatch(addFavorite(book))}>
        Добавить в избранное
      </button>
    </div>
  );
}
