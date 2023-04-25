import React from "react";

function ListAndKeys() {
  const anime = [
    {
      name: "eren",
      age: 20,
      anime: "AOT",
    },
    {
      name: "mikasa",
      age: 21,
      anime: "AOT",
    },
    {
      name: "Tanjiro",
      age: 15,
      anime: "Demon Slayer",
    },
    {
      name: "zeintsu",
      age: 14,
      anime: "Demon Slayer",
    },
  ];
  const List = anime.map((obj) => {
    return <Convert key={obj.age} name={obj.name} anime={obj.anime} />;
  });

  return <>{List}</>;
}
// import React from 'react'

function Convert({ name, anime }) {
  return (
    <>
      <li>
        I am {name} character of {anime}
      </li>
    </>
  );
}

export default ListAndKeys;

// export default ListAndKeys;
