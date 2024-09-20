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
            if(searchTerm === '')
            {   
                state.filteredPosts = posts;
            }
                
            else
            {
                state.filteredPosts = posts.filter(post => 
                    post.title.toLowerCase().includes(searchTerm.toLowerCase())
                ); 
            }
            
        },
        clearFilteredPosts: (state) => {
            state.filteredPosts = [];
        }
    },
};

const searchSlice = createSlice(options);

export const {setSearchTerm, filterPosts, clearFilteredPosts} = searchSlice.actions;

export default searchSlice.reducer;