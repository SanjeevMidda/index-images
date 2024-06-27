import React from "react";

const Image = ({ text, index, title, setPosition }) => {
  let imageStyles = {
    zIndex: index,
  };

  console.log(index);
  return (
    <div
      className={`${title}`}
      style={imageStyles}
      onMouseOver={() => setPosition()}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default Image;
