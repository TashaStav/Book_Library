import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2>404</h2>
      <p>Страница не найдена.</p>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
}
