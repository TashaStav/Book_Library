import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Не удалось загрузить данные");
        }

        const data = await res.json();

        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [url]);

  return { data, loading, error };
}
