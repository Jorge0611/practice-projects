import { useEffect, useState } from "react";
import { useDebounce } from "../utils/hooks/useDebounce";

/**
 * React component that renders a search bar.
 * @param {{ onSearch: (string) => void }} props
 * @returns
 */
export function SearchBar({ onSearch = () => {} }) {
  const [input, setInput] = useState("");
  const debounced = useDebounce(input, 500);

  useEffect(() => {
    onSearch(debounced);
  }, [debounced]);

  return (
    <div>
      <label>
        Search:
        <input
          style={{ width: "100%" }}
          placeholder="Search element by name..."
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
    </div>
  );
}
