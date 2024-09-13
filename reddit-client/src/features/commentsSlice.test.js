import commentsReducer, {fetchComments, clearComments} from './commentsSlice';

// unit test for comment slcie
describe('comment slice', () => {
    const initalState = {
        comments: [],
        isLoading: false,
        error: null,
    };

    it('should return the initial state when an empty action is dispatched', () => {
        const result = commentsReducer(undefined, {type:''});
        expect(result).toEqual(initalState);
    });

    it('should clear comments when clearPost is dispatched', () => {
        const previousState = {
            comments: [{id: 1, author: 'Lisa', content: 'I love working out'}],
            isLoading: false,
            error: null,
        };

        const result = commentsReducer(previousState, clearComments());
        expect(result.comments).toEqual([]);
    });

    it('should set isLoading to true and error to null when fetchComments.pending is dispatched', () => {
        const result = commentsReducer(initalState, {type: fetchComments.pending.type});
        expect(result.isLoading).toBe(true);
        expect(result.error).toBe(null);
    });

    it('should set is isLoading false and comments to the mock comments when fetchComments.fulfilled is dispatched', () => {
        const mockComments = [
            {id: 1, author: 'Lisa', content: 'I love working out'},
            {id: 2, author: 'Abel', content: "I'm on my own time"},
            {id: 3, author: 'Jessica', content: 'Reppin` for the lowlife'},
        ];

        const result = commentsReducer(initalState, {type: fetchComments.fulfilled.type, payload: mockComments});
        expect(result.comments).toEqual(mockComments);
        expect(result.isLoading).toBe(false);
        expect(result.error).toBe(null);
    });

    it('should set isLoading to false and error to the error message when fetchComments.rejectd is dispatched', () => {
        const result = commentsReducer(initalState, {type: fetchComments.rejected.type, error: {message: 'Error while loading comments'} });
        expect(result.isLoading).toBe(false);
        expect(result.error).toBe('Error while loading comments');
    })
});