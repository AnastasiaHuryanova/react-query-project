export async function fetchPosts() {
  const response = await fetch("http://localhost:4000/posts");
  return response.json();
}
export async function fetchPost(id) {
  const response = await fetch(`http://localhost:4000/posts/${id}`);
  return response.json();
}
export async function createPost(newPost) {
  const response = await fetch("http://localhost:4000/posts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  return response.json();
}
