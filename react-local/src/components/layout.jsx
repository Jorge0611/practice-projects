import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <br />
      <Link to="..">{"<<"} Go back</Link>
      <Outlet />
    </div>
  );
}
