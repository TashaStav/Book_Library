import { Link } from "react-router-dom";

export function Header() {
  return (
    <header
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        background: "#eee",
      }}
    >
      <Link to="/">Главная</Link>
      <Link to="/favorites">Избранное</Link>
    </header>
  );
}
