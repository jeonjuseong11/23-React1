import React from 'react';
import styles from './CommentStyle.js';

const Comment = (props) => {
  
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
          alt='프로필 이미지'
          style={styles.image}
          />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
};

export default Comment;