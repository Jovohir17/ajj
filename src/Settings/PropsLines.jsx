import React from "react";
import Cards from "../Utilities/Cards";

function PropsLines(props) {
  console.log("🚀 ~ file: PropsLines.jsx:4 ~ PropsLines ~ props:", props);
  const { names = [] } = props;
  return (
    <>
      {names.map((item) => (
        <Cards {...item} />
      ))}
    </>
  );
}

export default PropsLines;
