import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffect() {
  return <div></div>;
}

export default UseEffect;

// const [count, setCount] = useState(0);
// const fun = () => {
//   setCount(count + 1);
// };
//console.log('render')--every time wil displayed on console log
// useEffect(() => {
//   console.log(count);
// });
/////////////////////////////////////////CHANGING WINDOW WIDTH DYNAMIC/////////////////////////////////
/*cleaned up
 *side-effect
 *is inside component:can have state and props acess
 */
// const handleResize = () => {
//   setWindowWidth(window.innerWidth);
// };
// const [windowWidth, setWindowWidth] = useState(window.innerWidth);
// //clean-up while using useEfect to improve speed:adding RETURN which return function
// useEffect(() => {
//   window.addEventListener("resize", handleResize); //(resize is event,calling a function handleResize)
//   //this function is going to called when every this useEffect is cleaned up
//   //this is clean-up:whatever is in return will run first ,clean up the last time;
//   //check by adding console in both return and out of return
//   return () => {
//     window.removeEventListener("resize", handleResize);
//   };
// }, []);{props and state defined}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////useEffect fetching-data//////////////////////////////
/*suspence feature for data=fetching*/
/*
*AXIOS package,fetch API;

const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
//    return (
//     <div>
//       {/* <button onClick={fun}>you click {count} times</button> */
//       <ul>
//         posts.map((post)=>{
//           return(
//             <li>post.title</li>
//           )
//         })
//       </ul>
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

MAP:
array.map(items)=>{

}
*/

/*
function(){
  const[resourcType,setResouruceType]=useState("posts")

  useEffect(arrow function,array)//inside this arrow function every time we single time we render//inside array 
  we pass values which tell useEffect to run only when that particular value changes
  *if we pass [](empty array),useEffect is on mount and will not run bcoz empty array never change



  //in class this done in mount,
  






  return(
    <div>
    <button onClick={()=>setResouruceType("posts")>POSTS</button>
    <button onClick={()=>setResouruceType("comments")>COMMENTS</button>
    <button onClick={()=>setResouruceType("posts")>POSTS</button>
    </div>
    <h>{resourcType}
  )
}


*/
