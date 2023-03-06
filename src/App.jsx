import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import PostLists from "./pages/PostLists";

const App = () => {
  console.log("pippo");
  return (
    <div>
      <h1>blog</h1>
      <Routes>
        <Route path="/" element={<PostLists />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
