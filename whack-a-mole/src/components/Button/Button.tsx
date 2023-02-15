import React from "react";

interface ButtonProps {
  onClick: any;
  className: string;
  text: string;
}

function Button(props: ButtonProps) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
