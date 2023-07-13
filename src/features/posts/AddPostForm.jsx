import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    }
  };

  return (
    <section className="flex flex-col">
      <h2 className=" text-xl">Add a New Post</h2>
      <form>
        <label htmlFor="postTitle" className=" text-lg block ">
          Post Title:
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          className="dark:text-slate-50 dark:bg-slate-700 block w-full p-2 mb-5 rounded"
        />

        <label htmlFor="postContent" className=" text-lg block ">
          Content:
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
          className="dark:text-slate-50 dark:bg-slate-700 block w-full p-2 rounded"
        />
        <button
          type="button"
          onClick={onSavePostClicked}
          className=" rounded-md p-3 mt-3 bg-slate-500 text-slate-50 dark:bg-slate-200 dark:text-slate-500 w-max "
        >
          Save Post
        </button>
      </form>
    </section>
  );
};
export default AddPostForm;
