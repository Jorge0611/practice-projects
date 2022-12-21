import useSWR from "swr";
import { API_LOCAL_URL } from "../../config/index.js";
import { fetcher } from "../../utils/fetcher.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SearchBar } from "../../components/searchBar.jsx";

export function Posts() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: posts,
    error: postsError,
    isLoading: postsAreLoading,
  } = useSWR(`${API_LOCAL_URL}/posts`, fetcher);

  function filterData() {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (postsError) return <h1>Error</h1>;
  if (postsAreLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Posts</h1>

      <SearchBar onSearch={(value) => setSearchTerm(value)} />

      <ul>
        {filterData().map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
