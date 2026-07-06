import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeFavorite } from "../features/favorites/favoritesSlice";

export default function FavoritesPage() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);

  if (favorites.length === 0) {
    return <p>Список пуст</p>;
  }

  return (
    <div>
      <h2>Избранные книги</h2>
      {favorites.map((book) => (
        <div
          key={book.key}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{book.title}</h3>
          <p>Автор: {book.author_name?.[0] || "Неизвестен"}</p>
          <button onClick={() => dispatch(removeFavorite(book.key))}>
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
}
