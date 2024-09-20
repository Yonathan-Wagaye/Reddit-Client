import React, {useState} from "react";
import styles from './style/SearchBar.module.css';
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, filterPosts, clearFilteredPosts } from "../features/searchSlice";

const SearchBar = ({posts}) => {
    const [searchTerm, setSearchTermState] = useState('');
    const currentSearchTerm = useSelector((state) => state.search.searchTerm);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setSearchTermState(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!searchTerm.trim() && currentSearchTerm !== '') {
            // Only reset if the current search term is not already empty
            dispatch(setSearchTerm('')); // Clear the search term in the Redux store
            dispatch(filterPosts({ posts, searchTerm: '' })); // Reset the filtered posts to the full list
        } else if (searchTerm.trim() && searchTerm !== currentSearchTerm) {
            // Only dispatch actions if the search term has changed
            dispatch(setSearchTerm(searchTerm));
            dispatch(filterPosts({ posts, searchTerm }));
        }

    };

    return (
        <form className={styles.searchBar} onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
                className={styles.searchInput}
            />
            <div className={styles.svgContainer}>
                <button className={styles.searchButton}  type="submit"> <img src={`${process.env.PUBLIC_URL}/img/search.svg`} alt="search-bar" /> </button>
            </div>
            
        </form>
    )
};

export default SearchBar;