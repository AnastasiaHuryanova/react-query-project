import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/posts";
import AddPost from "../components/AddPost";

const PostLists = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  console.log(data);
  return (
    <div>
      <AddPost />
      lists
    </div>
  );
};

export default PostLists;
