import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/postsSlice";
import SplashScreen from "../componets/SplashScreen";
import Post from "../componets/Post";
import styles from './style/HomePage.module.css';
import SubRedditList from "../componets/SubRedditList";
import SearchBar from "../componets/SearchBar";
import Header from "../componets/Header";
import { filterPosts, setSearchTerm } from "../features/searchSlice";

const HomePage = () => {
    const dispatch = useDispatch();
    const {posts, isLoading, error} = useSelector((state) => state.posts);
    const {filteredPosts, searchTerm} = useSelector((state)=> state.search)
    const [currentSubreddit, setCurrentSubreddit] = useState('all');

    const handleSubRedditClick = (newSubreddit) => {
        if(newSubreddit === 'Home')
        {
            setCurrentSubreddit('all');
        }
        else
        {
            setCurrentSubreddit(newSubreddit);
        }
        
    }

    const handleReset = () => {
        dispatch(setSearchTerm('')); // Reset the search term in Redux
        dispatch(filterPosts({ posts, searchTerm: '' })); // Reset filteredPosts to show all posts
    };

    useEffect(() => {
        dispatch(fetchPosts(currentSubreddit));
    }, [dispatch, currentSubreddit]);

    if (isLoading)
        return <SplashScreen />
    if(error)
        return <div>Error: {error}</div>

    const postsToDisplay = searchTerm ? filteredPosts : posts;
    return (
        <div>
            <Header posts={posts}/>
            <div className={styles.mainContainer}>
                <div className={styles.postContainer}>
                    {postsToDisplay.length > 0 ? (
                        postsToDisplay.map((post) => (
                            <Post key={post.id} post={post} />
                        ))
                    ) : (
                        <div className={styles.noResults}>
                            <p>No posts found. Try a different search term.</p>
                            <button onClick={handleReset} className={styles.resetButton}>
                                Back to Full Post List
                            </button>
                        </div>
                    )}
                </div> 
                <div className={styles.subRedditContainer}>
                    <SubRedditList changeSubReddit={handleSubRedditClick}/>
                </div>
            </div>
        </div>
    )
};

export default HomePage;