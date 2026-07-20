import { describe, test, expect } from "vitest";
import favoritesReducer, {
  addFavorite,
  removeFavorite,
} from "./favoritesSlice";

describe("favoritesSlice", () => {
  const book = { key: "/works/OL123", title: "Oliver Twist" };

  test("добавляет книгу в избранное", () => {
    const initialState = { items: [] };
    const state = favoritesReducer(initialState, addFavorite(book));

    expect(state.items).toHaveLength(1);
    expect(state.items[0].title).toBe("Oliver Twist");
  });

  test("не добавляет одну книгу дважды", () => {
    const initialState = { items: [book] };
    const state = favoritesReducer(initialState, addFavorite(book));
    expect(state.items).toHaveLength(1);
  });

  test("удаляет книгу из избранного", () => {
    const initialState = { items: [book] };
    const state = favoritesReducer(initialState, removeFavorite(book.key));
    expect(state.items).toHaveLength(0);
  });
});
