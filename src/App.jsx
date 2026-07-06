import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";

const HomePage = lazy(() => import("./pages/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const BookPage = lazy(() => import("./pages/BookPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div>
      <h1>Библиотека книг</h1>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
