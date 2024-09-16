// post slice 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// async thrunk to fetch posts
// async thunk to fetch posts
// async thunk to fetch posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (subreddit = 'all') => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);

    if (!response.ok) {
        throw new Error('Error while fetching posts');
    }

    const dataObj = await response.json();

    return dataObj.data.children.map(post => {
        const postData = post.data;
        
        // Calculate the time difference
        const postTime = postData.created_utc * 1000; // Convert to milliseconds
        const currentTime = Date.now();
        const timeDifference = currentTime - postTime;

        // Convert time difference to human-readable format
        const getTimeElapsed = (diff) => {
            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
            if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
            if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
            return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
        };

        const readableComment = (numComment) => {
            if (numComment >= 1000000) {
                const readable = numComment / 1000000;
                return `${readable.toFixed(1)}M`; // Round to one decimal place
            } else if (numComment >= 1000) {
                const readable = numComment / 1000;
                return `${readable.toFixed(1)}K`; // Round to one decimal place
            } else {
                return `${numComment}`;
            }
        };
        
        const image = postData.preview?.images[0]?.source?.url?.replace('&amp;', '&') || post.thumbnail;
        return {
            id: postData.id,
            title: postData.title,
            thumbnail: image,
            subreddit: postData.subreddit_name_prefixed,
            time: getTimeElapsed(timeDifference), // human-readable time difference
            userAvatar: postData.icon_img || 'default-avatar-url.png',
            numComments: readableComment(Number(postData.num_comments)),
            ups: readableComment(Number(postData.ups)),

        };
    });
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