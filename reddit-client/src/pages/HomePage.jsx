import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/postsSlice";
import SplashScreen from "../componets/SplashScreen";
import Post from "../componets/Post";

const HomePage = () => {
    const dispatch = useDispatch();
    const {posts, isLoading, error} = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts('all'));
    }, [dispatch]);

    if (isLoading)
        return <SplashScreen />
    if(error)
        return <div>Error: {error}</div>
    return (
        <div>
          <div>
          {posts.map((post) => (
            <Post post={post} />
            ))}
          </div> 
        </div>
    )
};

export default HomePage;