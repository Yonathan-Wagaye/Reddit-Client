import searchReducer, { setSearchTerm, filterPosts } from './searchSlice';

describe('search slice', () => {
    const initialState = {
        searchTerm: '',
        filteredPosts: []
    };

    it('should return the initial state when an empty action is dispatched', () => {
        const result = searchReducer(initialState, { type: '' }); 
        expect(result).toEqual(initialState); 
    });

    it('should set the searchTerm state when setSearchTerm is dispatched', () => {
        const result = searchReducer(initialState, setSearchTerm('Stay Awake'));
        expect(result.searchTerm).toEqual('Stay Awake');
    });

    it('should filter the posts when filterPosts is dispatched', () => {
        const posts = [
            {id: 1, title: 'I have been the hardest to love'},
            {id: 2, title: 'It is to find me when I am not home'},
            {id: 3, title: 'The house I bought is not a home'},
        ];
        const searchTerm = 'home';

        const filteredResult = [
            {id: 2, title: 'It is to find me when I am not home'},
            {id: 3, title: 'The house I bought is not a home'},
        ];

        const result = searchReducer(initialState, filterPosts({posts, searchTerm}));
        expect(result.filteredPosts).toEqual(filteredResult);
    });

    it('should return an empty array if no posts match the search term', () => {
        const posts = [
            {id: 1, title: 'I have been the hardest to love'},
            {id: 2, title: 'It is to find me when I am not home'},
            {id: 3, title: 'The house I bought is not a home'},
        ];
        const searchTerm = 'hair';

        const result = searchReducer(initialState, filterPosts({posts, searchTerm}));
        expect(result.filteredPosts).toEqual([]);
    })
});
