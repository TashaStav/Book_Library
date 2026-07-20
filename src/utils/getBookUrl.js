const BASE_URL = "https://openlibrary.org/search.json";

export function getBooksUrl(debouncedSearch) {
  if (!debouncedSearch || debouncedSearch.length < 3) {
    return null;
  }

  return `${BASE_URL}?q=${debouncedSearch}`;
}