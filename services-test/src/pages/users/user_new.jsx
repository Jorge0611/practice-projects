import { UserForm } from "../../components/forms/userForm.jsx";
import { useSWRConfig } from "swr";
import { API_LOCAL_URL } from "../../config/index.js";
import { useNavigate } from "react-router-dom";

export function NewUser() {
  const { mutate } = useSWRConfig();
  const navigate = useNavigate();

  const postUser = async (data) => {
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      mutate(`${API_LOCAL_URL}/users`);
      alert("User created");
      navigate(-1);
    });
  };

  return (
    <>
      <h1>New user</h1>
      <UserForm onSubmit={(data) => postUser(data)} />
    </>
  );
}
