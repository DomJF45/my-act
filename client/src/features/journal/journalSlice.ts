import { createSlice } from '@reduxjs/toolkit';

interface iPost {
  id: string,
  date: string,
  title: string,
  content: string,
  mood: string
}

interface iState {
  posts: iPost[] | null
}

const posts: iPost[] | null = JSON.parse(localStorage.getItem('posts') || '{}');

const initialState: iState = {
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
    },
    deletePost(state, action) {
      const id = action.payload;
      state.posts = state.posts!.filter(post => post.id !== id);
    }
  }
})

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;