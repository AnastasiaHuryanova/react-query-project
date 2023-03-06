export async function fetchPosts() {
  const response = await fetch("http://localhost:4000/posts");
  return response.json();
}
