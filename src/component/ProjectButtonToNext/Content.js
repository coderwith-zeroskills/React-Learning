import React from "react";
import "./Content.css";

function Content({ arr, index, onSet }) {
  //   const [onOf, setOnOf] = useState(false);
  const abcd = arr[index];
  //   console.log(abcd);
  if (arr.length === 0) return <p>LOADING...</p>;
  else {
    return (
      <div>
        {onSet(true)}
        <div className="container">
          <p>
            <b>id</b>:{abcd.id}
          </p>
          <p>
            <b>title</b>:{abcd.title}
          </p>
          <p>
            <b> price</b>:{abcd.price}$
          </p>
          <p>
            <b>description</b>
            {abcd.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Content;
