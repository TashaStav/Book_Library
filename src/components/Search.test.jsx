import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Search } from "./Search";
import { renderWithProviders } from "../test-utils";
import { describe, test, expect } from "vitest";

describe("Search", () => {
  test("отображает поле поиска", () => {
    renderWithProviders(<Search />);
    expect(
      screen.getByPlaceholderText(/Введите название книги/i)
    ).toBeInTheDocument();
  });

  test("ввод текста сохраняет значение в store", async () => {
    const user = userEvent.setup();
    const { store } = renderWithProviders(<Search />);
    const input = screen.getByPlaceholderText(/Введите название книги/i);

    expect(store.getState().search.search).toBe("");
    await user.type(input, "Oliver Twist");
    expect(store.getState().search.search).toBe("Oliver Twist");
  });
});
