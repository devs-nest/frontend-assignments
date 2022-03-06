import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "0",
      number: "0",
      operator: "",
    };

    this.handleNumberInput = this.handleNumberInput.bind(this);
  }

  handleNumberInput(e) {
    const value = e.target.innerHTML;

    console.log(value);

    // appending the value from the button to the current number
    this.setState((prevState) => {
      return {
        number:
          prevState.number === "0" && value === "0" // prevents number from having multiple 0's at the beginning
            ? "0"
            : prevState.number % 1 === 0 && value !== "0" // if it's a whole number
            ? Number(prevState.number + value) // it returns a Number() to get rid of 0's in the front when a number is typed, also includes
            : prevState.number + value, // value !== "0" so you can type a 0 right after the comma
        result: prevState.operator ? prevState.result : "0", // this line resets the result if a new number was typed with no operator stored
      };
    });
  }

  render() {
    const { number, result, operator } = this.state;
    return (
      <div className="calculator">
        <CalculatorDisplay output={number ? number : result + operator} />
        <div className="calculator-buttons">
          <CalculatorButton value="C" className="calculator-clear-button" />
          <CalculatorButton
            value="+-"
            className="calculator-operation-button"
          />
          <CalculatorButton
            value="%"
            className="calculator-operation-button"
            onClick=""
            disabled="true"
          />
          <CalculatorButton value="/" className="calculator-operation-button" />
          <CalculatorButton
            value="7"
            className="calculator-number-button"
            onClick={this.handleNumberInput}
          />
          <CalculatorButton
            value="8"
            className="calculator-number-button"
            onClick={this.handleNumberInput}
          />
          <CalculatorButton
            value="9"
            className="calculator-number-button"
            onClick={this.handleNumberInput}
          />
          <CalculatorButton value="*" className="calculator-operation-button" />
          <CalculatorButton
            value="4"
            className="calculator-number-button"
            onClick={this.handleNumberInput}
          />
          <CalculatorButton
            value="5"
            className="calculator-number-button"
            onClick={this.handleNumberInput}
          />
          <CalculatorButton
            value="6"
            className="calculator-number-button"
            onClick={this.handleNumberInput}
          />
          <CalculatorButton value="-" className="calculator-operation-button" />
          <CalculatorButton
            value="1"
            className="calculator-number-button"
            onClick={this.handleNumberInput}
          />
          <CalculatorButton
            value="2"
            className="calculator-number-button"
            onClick={this.handleNumberInput}
          />
          <CalculatorButton
            value="3"
            className="calculator-number-button"
            onClick={this.handleNumberInput}
          />
          <CalculatorButton value="+" className="calculator-operation-button" />
          <CalculatorButton
            value="0"
            className="calculator-number-button"
            onClick={this.handleNumberInput}
          />
          <CalculatorButton value="." className="calculator-number-button" />
          <CalculatorButton
            value="="
            className="calculator-equal-button span-two"
          />
        </div>
      </div>
    );
  }
}

class CalculatorDisplay extends Component {
  render() {
    const { output } = this.props;
    return <div className="calculator-display">{output}</div>;
  }
}

class CalculatorButton extends Component {
  render() {
    const { value, onClick, className, disabled } = this.props;

    return (
      <button
        value={value}
        className={"calculator-button " + className}
        onClick={onClick}
        disabled={disabled}
      >
        {value}
      </button>
    );
  }
}

export default Calculator;
