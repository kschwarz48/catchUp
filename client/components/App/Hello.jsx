import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>BIO, {props.name}</p>
      <input
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      />
    </div>
  );
};

export default Hello;
