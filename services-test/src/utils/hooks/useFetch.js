import { useEffect, useState } from "react";
import { API_SECRET } from "../../config/index.js";

/**
 * React hook to fetch data from the API
 * @param {string | {url, method, body}} query
 * @returns
 */
export function useFetch(query) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (typeof query === "string") {
    query = { url: query, method: "GET", body: {} };
  }

  let options = {
    method: query.method,
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": API_SECRET,
    },
  };

  if (query.method !== "GET") {
    options.body = JSON.stringify(query.body);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(query.url, options)
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading };
}
