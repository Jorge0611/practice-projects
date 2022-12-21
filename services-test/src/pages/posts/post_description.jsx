import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { API_LOCAL_URL } from "../../config/index.js";
import { fetcher } from "../../utils/fetcher.js";
import { useState } from "react";

export function PostsDescription() {
  const { post } = useParams();

  const {
    data: postData,
    error: postError,
    isLoading: postIsLoading,
  } = useSWR(`${API_LOCAL_URL}/posts/${post}`, fetcher);

  const {
    data: userData,
    error: userError,
    isLoading: userIsLoading,
  } = useSWR(`${API_LOCAL_URL}/users/${postData?.userId}`, fetcher);

  if (postError || userError) return <h1>Error</h1>;
  if (postIsLoading || userIsLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>
        <b>Author:</b>{" "}
        <Link to={`/users/${postData.userId}`}>{userData.name}</Link>
      </p>
      <p>
        <b>Published At:</b>{" "}
        {new Date(postData.created_at).toLocaleDateString()}
      </p>

      <h2>Post Content</h2>
      <p>{postData.content}</p>

      <br />
    </div>
  );
}
