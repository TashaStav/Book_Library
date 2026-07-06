import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function BookPage() {
  const { id } = useParams();
  const {
    data: book,
    loading,
    error,
  } = useFetch(`https://openlibrary.org/works/${id}.json`);

  if (loading) {
    return <p>Загрузка книги...</p>;
  }
  if (error) {
    return <p>Ошибка: {error}</p>;
  }
  if (!book) {
    return null;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>
        <strong>Описание:</strong>
      </p>
      <p>
        {typeof book.description === "string"
          ? book.description
          : book.description?.value || "Описание отсутствует"}
      </p>
      <p>
        <strong>Количество изданий:</strong> {book.covers?.length || 0}
      </p>
    </div>
  );
}
