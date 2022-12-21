import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Pantalla de inicio</h1>
      <ul>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
}