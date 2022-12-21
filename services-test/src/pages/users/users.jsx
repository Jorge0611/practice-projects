import useSWR from "swr";
import { API_LOCAL_URL } from "../../config/index.js";
import { fetcher } from "../../utils/fetcher.js";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/searchBar.jsx";
import { useState } from "react";

export function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useSWR(`${API_LOCAL_URL}/users`, fetcher);

  function filterData() {
    return data.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Users</h1>
        <Link ele to="/users/new">
          <button>New user</button>
        </Link>
      </div>

      <SearchBar onSearch={(value) => setSearchTerm(value)} />

      <ul>
        {filterData().map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
