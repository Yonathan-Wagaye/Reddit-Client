// subredditSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch subreddits and icons
export const fetchSubreddits = createAsyncThunk(
  'subreddits/fetchSubreddits',
  async () => {
    const response = await fetch(`https://www.reddit.com/subreddits/popular.json`);
    if (!response.ok) {
      throw new Error('Error fetching subreddits');
    }
    const data = await response.json();
    return data.data.children.map((subreddit) => ({
      name: subreddit.data.display_name_prefixed,
      icon: subreddit.data.icon_img || subreddit.data.community_icon || '/path/to/default-icon.png',
    }));
  }
);

const subredditSlice = createSlice({
  name: 'subreddits',
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default subredditSlice.reducer;
