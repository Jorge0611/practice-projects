import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function User() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/users?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, [page]);

  return (
    <div>
      <h1>Users</h1>
      {page > 1 && <h2>Page: {page}</h2>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPage((prev) => prev - 1)}>
          {"<< "} Previous
        </button>
        &nbsp;
        <button onClick={() => setPage((prev) => prev + 1)}>
          Next {" >>"}
        </button>
      </div>
    </div>
  );
}
