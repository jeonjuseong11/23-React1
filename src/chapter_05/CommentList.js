import React from 'react';
import Comment from './Comment';
const comments=[
  {
      name:"전주성",
      comment:"안녕하세요 전주성입니다."
  },
  {
    name:"전주성2",
    comment:"안녕하세요 전주성2입니다."
  },
  {
    name:"전주성2",
    comment:"안녕하세요 전주성2입니다."
  },
]
const CommentList = () => {
  return (
    <div>
      {comments.map((v)=>{
        return(
          <Comment name={v.name} comment={v.comment}/>
        )
      })}
    </div>
  );
};

export default CommentList;