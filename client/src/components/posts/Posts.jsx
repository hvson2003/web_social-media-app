import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../utils/axios";

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => makeRequest.get("/post?userId=" + userId).then(res => res.data)
  });

  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
          ? "loading"
          : data && data.map(post => (<Post post={post} key={post.id} />
          ))}
    </div>
  );
}

export default Posts;
