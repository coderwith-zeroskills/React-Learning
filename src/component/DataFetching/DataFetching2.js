import React, { useState, useEffect } from "react";
import axios from "axios";
//no  use of useEffect hook
function DataFetching2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetching2;
