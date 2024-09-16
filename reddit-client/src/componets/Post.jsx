import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './style/Post.module.css';
import Comments from "./Comments";


const Post = ({ post }) => {
    const previewImage = post.thumbnail;
    const [showComments, setShowComments]  = useState(false);
    const handleCommentsButton  = () => {
        setShowComments(previousValue => !previousValue); 
    };
    console.log(showComments);
    return (
        <div className={styles.postContainer}>
    
            <div className={styles.postHeader}>
                <div className={styles.topHeader}>   
                    <div>
                        <span className={styles.subredditName}>{post.subreddit}</span>
                        <span className={styles.postTime}>• {post.time}</span>
                    </div>
                </div>
                
                <h3 className={styles.postTitle}>{post.title}</h3>
            </div>
            
     
            <div className={styles.postThumbnailContainer}>
                {previewImage && previewImage !== 'self' && previewImage !== 'default' ? (
                    <img src={previewImage} alt={post.title} className={styles.postThumbnail}/>
                ) : (
                    <div>No Image Available</div>
                )}
            </div>

           
            <div className={styles.postFooter}>
                <button className={styles.commentButton} onClick={handleCommentsButton}>
                    <div className={styles.commentIcon}><img src={`${process.env.PUBLIC_URL}/img/comments-64.png`} alt="Comments" /></div>
                    <div className={styles.numberOfComments}>{post.numComments} </div>
                </button> 
                <div className={styles.voteButtons}>
                    <button>
                        <img src={`${process.env.PUBLIC_URL}/img/upArrow.png`} alt="vote up" />
                    </button>
                    <div className={styles.voteCount}>{post.ups} votes</div> 
                    <button>
                        <img src={`${process.env.PUBLIC_URL}/img/downArrow.png`} alt="vote down" />
                    </button>
                </div>
                
            </div>
            {showComments && <Comments postId={post.id} />}

        </div>
    );
};

export default Post;
