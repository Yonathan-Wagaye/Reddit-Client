import postReducer, {clearPosts, fetchPosts} from './postsSlice';
import { configureStore } from '@reduxjs/toolkit';


// unit test for post slice 
describe('post slice', () => {
    const initialState = {
        posts: [],
        isLoading: false,
        error: null,
    };
    
    // tests empty action 
    it('should return the inital state when an empty action is dispatched', () => {
        const result = postReducer(undefined, {type: ''});
        expect(result).toEqual(initialState);
    });

    // tests clear is dispatched 
    it('should clear posts when clearPost action is dispatched', () => {
        const previousState = {
            posts: [{id: 1, title: 'hello'}],
            isLoading: false,
            error: null,
        };

        const result = postReducer(previousState, clearPosts());
        expect(result.posts).toEqual([]);
    });

    // tests the action fetchPosts.pending
    it('should set isLoading to true when fetchPosts.pending is dispatched', () => {
        const action = {type: fetchPosts.pending.type};
        const result = postReducer(initialState, action);
        
        expect(result.isLoading).toBe(true);
        expect(result.error).toBe(null);
    });

    // tests the action fetchPosts.fulfilled 
    it('should set posts and isLoading to the fetched post and false respectively when fetchPosts.fulfilled is dispatched', () => {
        const mockPosts = [
            {id: 1, title: '3:15'},
            {id: 2, title: 'Breath'},
        ];
        
        const action = {type: fetchPosts.fulfilled.type, payload: mockPosts};
        const result = postReducer(initialState, action);

        expect(result.isLoading).toBe(false);
        expect(result.posts).toEqual(mockPosts);
        expect(result.error).toBe(null);

    });

    // tests the action fetchPosts.rejected 
    it('should set error to the error thrown and isLoading to false when fetchPosts.rejected is dispatched', () => {
        const action = {type: fetchPosts.rejected.type, error: {message: 'Failed to fetch'}};
        const result  = postReducer(initialState, action);

        expect(result.isLoading).toBe(false);
        expect(result.error).toBe('Failed to fetch');
    })
});