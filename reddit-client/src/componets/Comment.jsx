import React, {useState} from "react";
import styles from './style/Comment.module.css';


const Comment = ({comment}) => {
    const [showReplies, setShowReplies] = useState(false);

    const handleToggleReplies = () => {
        setShowReplies(!showReplies);
    };

    const readableComment = (numComment) => {
        if (numComment >= 1000000) {
            const readable = numComment / 1000000;
            return `${readable.toFixed(1)}M`; 
        } else if (numComment >= 1000) {
            const readable = numComment / 1000;
            return `${readable.toFixed(1)}K`; 
        } else {
            return `${numComment}`;
        }
    };

    return (
        <div className={styles.commentContainer}>
            <div className={styles.commentContent}>
                <div className={styles.commentAuthor}>{comment.author}</div>
                    <p className={styles.commentBody}>{comment.body}</p>
                    <div className={styles.commentMeta}>
                        <span className={styles.commentUpvotes}>{readableComment(Number(comment.ups))} upvotes</span>
                        <button onClick={handleToggleReplies} className={styles.replyToggle}>
                            {showReplies ? 'Hide Replies' : `Show Replies (${comment.replies?.data?.children.length || 0})`}
                        </button>
                    </div>
            </div>

            {/* Render Replies Recursively */}
            {showReplies && comment.replies && (
                <div className={styles.repliesContainer}>
                {comment.replies.data.children.map((reply) => (
                    <Comment key={reply.data.id} comment={reply.data} />
                ))}
                </div>
            )}
        </div>
    );
}

export default Comment;