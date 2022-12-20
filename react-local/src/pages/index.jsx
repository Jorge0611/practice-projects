import { Link } from "react-router-dom";
export function Home() {
  return (
    <div>
      <h1>JSON Server API</h1>

      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}
