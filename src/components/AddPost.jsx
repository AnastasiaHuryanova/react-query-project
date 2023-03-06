import { useMutation, useQueryClient } from "@tanstack/react-query";
import { v4 } from "uuid";
import { createPost } from "../api/posts";
import PostForm from "./PostForm";

const AddPost = () => {
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      console.log("success bro");
    },
  });

  const handleAddPost = (post) => {
    createPostMutation.mutate({
      id: v4(),
      ...post,
    });
  };

  return (
    <div>
      <h2>AddPost</h2>
      <PostForm onSubmit={handleAddPost} initialValue={{}} />
    </div>
  );
};

export default AddPost;
