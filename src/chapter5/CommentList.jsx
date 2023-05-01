import React from 'react'
import Comment from './Comment';

const comments = [
  {
    name: "이민재", comment: "안녕하세요 이민재입니다"
  },
  {
    name: "붕붕이", comment: "안녕하세요 붕붕이입니다"
  },
  {
    name: "개발자", comment: "안녕하세요 개발자입니다"
  }
];


function CommentList(props) {
  
    return(
    <div>
      {comments.map((comment) => {
        return (
          
            <Comment name={comment.name} comment={comment.comment} />
        );
        })}            
    </div>
    
    );
}

export default CommentList