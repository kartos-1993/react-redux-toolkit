import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "First post",
    content: "This is the first post",
  },
  {
    id: 2,
    title: "Second post",
    content: "This is the second post",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectAllPost = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
