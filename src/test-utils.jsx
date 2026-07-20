import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import searchReducer from "./features/search/searchSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";

export function renderWithProviders(ui, route = "/") {
  const store = configureStore({
    reducer: { search: searchReducer, favorites: favoritesReducer },
  });

  return {
    store,
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
      </Provider>
    ),
  };
}
