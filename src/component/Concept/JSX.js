import React from "react";

const Hell=()=>{
    // return(
    //     <div>
    //          <h1>inside and using JSX</h1>
    //     </div>
    // )
   return(
    React.createElement('div',{className:'its_class'},'non-jsx',React.createElement('h',null,'insdie head'))
   )
    
}
export default Hell;