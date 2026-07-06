import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookCard } from "./BookCard";
import { renderWithProviders } from "../test-utils";
import { describe, test, expect } from "vitest";

describe("BookCard", () => {
  const book = {
    key: "/works/OL12345W",
    title: "Oliver Twist",
    author_name: ["Charles Dickens"],
    first_publish_year: 1822,
  };

  test("отображает информацию о книге", () => {
    renderWithProviders(<BookCard book={book} />);
    expect(screen.getByText(/Oliver Twist/i)).toBeInTheDocument();
    expect(screen.getByText(/Charles Dickens/i)).toBeInTheDocument();
    expect(screen.getByText(/1822/i)).toBeInTheDocument();
  });

  test("добавляет книгу в избранное", async () => {
    const user = userEvent.setup();
    const { store } = renderWithProviders(<BookCard book={book} />);

    expect(store.getState().favorites.items).toHaveLength(0);
    await user.click(
      screen.getByRole("button", { name: /Добавить в избранное/i })
    );
    expect(store.getState().favorites.items).toHaveLength(1);
    expect(store.getState().favorites.items[0].title).toBe("Oliver Twist");
  });
});
