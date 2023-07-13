import "./App.css";

import PostList from "./features/PostList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div
      className={`bg-slate-50 dark:bg-slate-800 dark:text-white w-full h-screen `}
    >
      <NavBar />
      <main className="">
        <PostList />
      </main>
    </div>
  );
}

export default App;
