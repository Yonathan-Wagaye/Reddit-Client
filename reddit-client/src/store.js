import searchReducer from './features/searchSlice';
import commentsReducer from './features/commentsSlice';
import postsReducer from './features/postsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store  = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
        search: searchReducer,
    },
});

