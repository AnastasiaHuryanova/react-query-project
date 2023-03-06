import { useMutation } from "@tanstack/react-query";
import { createPost } from "../api/posts";
import PostForm from "./PostForm";
import { v4 } from "uuid";

const AddPost = () => {
  const createPostMutation = useMutation({
    mutationFn: createPost,
  });

  const handleAddPost = (post) => {
    createPostMutation.mutate({
      id: v4(),
      ...post
    })
  }

  return (
    <div>
      <h2>AddPost</h2>
      <PostForm onSubmit={handleAddPost} />
    </div>
  );
};

export default AddPost;
