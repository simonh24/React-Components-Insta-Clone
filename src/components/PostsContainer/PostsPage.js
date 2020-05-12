//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import data from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  const [postData, setPostData] = useState(data);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        postData.map(el => <Post post={el}/>)
      }
    </div>
  );
};

export default PostsPage;
