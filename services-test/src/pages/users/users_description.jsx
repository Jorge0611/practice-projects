import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { API_LOCAL_URL } from "../../config/index.js";
import { fetcher } from "../../utils/fetcher.js";

export function UserDescription() {
  const { user } = useParams();

  const {
    data: userData,
    error: userError,
    isLoading: userIsLoading,
  } = useSWR(`${API_LOCAL_URL}/users/${user}`, fetcher);

  const {
    data: postsData,
    error: postsError,
    isLoading: postsIsLoading,
  } = useSWR(`${API_LOCAL_URL}/users/${user}/posts`, fetcher);

  if (userError || postsError) return <h1>Error</h1>;
  if (userIsLoading || postsIsLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <section title={"User Info"}>
        <h1>{userData.name}</h1>
        <p>
          <b>Edad:</b> {userData.age}
        </p>
        <p>
          <b>Dirección:</b> {userData.address}
        </p>
      </section>
      <section title={"User’s Posts"}>
        <h2>User’s Posts</h2>
        <ul>
          {postsData.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
