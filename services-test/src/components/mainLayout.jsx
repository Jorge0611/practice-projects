import { Outlet, useNavigate } from "react-router-dom";

export function MainLayout() {
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <br />
      <a href={"#"} onClick={handleOnClick}>
        ⬅ Regresar
      </a>
      <Outlet />
    </>
  );
}
