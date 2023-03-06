import { useMutation } from "@tanstack/react-query";
import { createPost } from "../api/posts";
import PostForm from "./PostForm";

const AddPost = () => {
  const createPostMutation = useMutation({
    mutationFn: createPost,
  });

  const

  return (
    <div>
      <h2>AddPost</h2>
      <PostForm />
    </div>
  );
};

export default AddPost;
