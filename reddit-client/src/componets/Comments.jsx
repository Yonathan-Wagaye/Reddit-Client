import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearComments, fetchComments } from "../features/commentsSlice";
import Comment from "./Comment";
const Comments = ({postId}) => {

    const dispatch = useDispatch();
    const {comments, isLoading, error} = useSelector(state => state.comments);
    
    useEffect(() => {
        console.log(postId);
        if(postId)
        {
            dispatch(fetchComments(postId));
        }

        return () => { dispatch(clearComments()) };
        
    }, [dispatch, postId]);
    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id}> <Comment comment={comment}/> </div>
            ))}
        </div>
    )
}

export default Comments;