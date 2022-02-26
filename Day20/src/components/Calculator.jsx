import React from "react";

const Calculator = (props) => {
  return (
    <div>
      <h2>{props.operation}</h2>
      <h3>{props.calculate}</h3>
      <h3>{props.result}</h3>
    </div>
  );
};
export default Calculator;
