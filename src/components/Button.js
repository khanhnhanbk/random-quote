import React from "react";

export default function Button(props) {
  return (
    <button className="btn" id={props.id} onClick={props.clickHandle}>
      {props.children}
    </button>
  );
}
