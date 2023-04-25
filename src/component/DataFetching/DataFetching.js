import React, { useState, useEffect } from "react";
import axios from "axios";
//no  use of useEffect hook
function DataFetching() {
  const [posts, setPost] = useState([]);
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => setPost(res.data))
    .catch((error) => console.log(error));
  return (
    <div>
      {posts.length}
      {
        <ul>
          {posts.map((post) => {
            return <li>h{post.title}</li>;
          })}
        </ul>
      }
    </div>
  );
}

export default DataFetching;
