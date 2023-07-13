import { useSelector } from "react-redux";
import { selectAllPost } from "./postsSlice";

const PostList = () => {
  const posts = useSelector(selectAllPost);

  const renderPosts = posts.map((post) => {
    return (
      <article
        key={post.id}
        className=" border border-solid border-slate-700 dark:border-slate-50 rounded p-7 mb-8"
      >
        <h3 className="text-xl mb-2">{post.title}</h3>
        <p className=" text-sm">{post.content}</p>
      </article>
    );
  });

  return (
    <section className="">
      <h2 className=" text-3xl mt-4 mb-8">Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostList;
