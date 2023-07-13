import "./App.css";

import PostList from "./features/posts/PostList";
import NavBar from "./components/NavBar";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <div
      className={`bg-slate-100 dark:bg-slate-800 dark:text-white w-full flex justify-center`}
    >
      <div className=" basis-3/5 max-w-md">
        <NavBar />
        <main className="px-6 ">
          <AddPostForm />
          <PostList />
        </main>
      </div>
    </div>
  );
}

export default App;
