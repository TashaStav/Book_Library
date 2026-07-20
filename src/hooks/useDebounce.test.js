import { describe, test, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "./useDebounce";

describe("useDebounce", () => {
  vi.useFakeTimers();

  test("обновляет значение после задержки", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: "tw" } }
    );

    rerender({ value: "twist" });
    act(() => vi.advanceTimersByTime(500));

    expect(result.current).toBe("twist");
  });
});
