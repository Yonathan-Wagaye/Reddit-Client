import { createSlice } from "@reduxjs/toolkit";


const options = {
    name: 'search',
    initialState: {
        searchTerm: '',
        filteredPosts: [],
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        filterPosts: (state, action) => {
            const {posts, searchTerm} = action.payload;
            state.filteredPosts = posts.filter(post => 
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            ); 
        },
    },
};

const searchSlice = createSlice(options);

export const {setSearchTerm, filterPosts} = searchSlice.actions;

export default searchSlice.reducer;