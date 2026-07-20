import { screen } from "@testing-library/react";
import { renderWithProviders } from "../test-utils";
import { BookList } from "./BookList";
import { describe, test, expect, vi } from "vitest";

describe("BookList", () => {
  test("показывает ошибку, если сервер вернул ошибку", async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );
    renderWithProviders(<BookList search="Oliver" />);
    expect(await screen.findByText(/Ошибка/i)).toBeInTheDocument();
  });
});
test("отображает книги после успешной загрузки", async () => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          docs: [
            {
              key: "/works/OL123",
              title: "Oliver Twist",
              author_name: ["Charles Dickens"],
              first_publish_year: 1822,
            },
          ],
        }),
    })
  );

  renderWithProviders(<BookList search="Oliver" />);
  expect(await screen.findByText(/Oliver Twist/i)).toBeInTheDocument();
});
