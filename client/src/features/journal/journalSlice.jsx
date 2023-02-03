import { createSlice } from '@reduxjs/toolkit';

const posts = JSON.parse(localStorage.getItem('posts'));

const initialState = {
  posts: posts ? posts : null
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      if (state.posts === null) {
        let firstPost = [];
        firstPost.push(action.payload);
        localStorage.setItem('posts', JSON.stringify(firstPost));
      } else {
        state.posts = [action.payload, ...state.posts];
        localStorage.setItem('posts', JSON.stringify(state.posts));
      }
    }
  }
})

export const { addPost } = postSlice.actions;
export default postSlice.reducer;