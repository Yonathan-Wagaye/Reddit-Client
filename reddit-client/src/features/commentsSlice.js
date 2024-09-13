import { createSlice, createAsyncThunk, combineSlices } from "@reduxjs/toolkit";

// comments slice 
export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId) => {
    const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
    if(!response.ok)
    {
        throw new Error(`Error while fetching comments`);
    }

    const dataObj = await response.json();
    return dataObj[1].data.children.map(comment => comment.data);
});


// create slice options 
const options = {
    name: 'comments',
    initialState: {
        comments: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        clearComments: (state) => {
            state.comments = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
};

const commentsSlice = createSlice(options);

export const {clearComments} = commentsSlice.actions;
export default commentsSlice.reducer;