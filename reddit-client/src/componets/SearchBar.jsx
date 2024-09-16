import React, {useState} from "react";
import styles from './style/SearchBar.module.css'

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (searchTerm.trim()) 
        {        
            onSearch(searchTerm);        
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