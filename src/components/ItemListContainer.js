import React from "react";

const ItemListContainer = ({ greeting, usuario, handleClick }) => {
  return (
    <div>
      <h1>{greeting} </h1>
      <h2>{usuario} </h2>
      <button onClick={() => handleClick(1, 2)}> Click Me </button>
    </div>
  );
};

export default ItemListContainer;
