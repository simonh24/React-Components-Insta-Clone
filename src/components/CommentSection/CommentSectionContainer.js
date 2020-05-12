// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {
        props.comments.map(el => <Comment username={el.username} text={el.text}/>)
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
