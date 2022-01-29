import React from "react";

const titleStyle = {
  width: "fit-content",
  fontVariant: "small-caps",
  position: "relative",
  display: "grid",
  placeItems: "center",
  margin: "auto"
};

const Title = ({ text }) => {
  return (
    <div style={titleStyle}>
      <h3> Le nostre vacanze </h3>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
