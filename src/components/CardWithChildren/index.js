import React from "react";

const Card = ({ children, cardClassname }) => {
  return (
    <>
      <div className={`border rounded-lg shadow-lg w-[300px] ${cardClassname}`}>{children}</div>
    </>
  );
};

export default Card;
