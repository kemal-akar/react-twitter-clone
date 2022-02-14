import React from "react";
function Text(props) {
  return React.createElement(
    "div",
    { className: "text" },
    props.children
  );
}
export default Text;
