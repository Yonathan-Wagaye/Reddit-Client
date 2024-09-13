// post slice 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// async thrunk to fetch posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (subreddit = 'all') => {

    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    if(!response.ok)
    {
        throw new Error('Error while fetching posts');
    }

    const dataObj = await response.json();
    return dataObj.data.children.map(post => post.data);
    
});

// configration object for the postSlice
const options = {
    name: 'posts',
    initialState: {
        posts:[],
        isLoading: false,
        error: null,
    },
    reducers:{
        clearPosts: (state) => {
            state.posts = []
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.posts = action.payload;
          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
          });
      },

};

const postSlice = createSlice(options);


export const {clearPosts} = postSlice.actions;
export default postSlice.reducer;