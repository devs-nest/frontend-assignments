import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '0',
      number: '0',
      operator: '',
    };

    this.handleNumberInput = this.handleNumberInput.bind(this);
    this.handleOperatorInput = this.handleOperatorInput.bind(this);
    this.handleEqualInput = this.handleEqualInput.bind(this);
    this.handleCommaInput = this.handleCommaInput.bind(this);
    this.handleNegateInput = this.handleNegateInput.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
  }

  // function to handle input of the clear button
  handleClearInput() {
    this.setState({ result: '0', number: '0', operator: '' });
  }

  // function to handle inputs from number buttons
  handleNumberInput(e) {
    e.preventDefault();

    // Getting the value from the pressed button
    const value = e.target.innerHTML;

    console.log(value);

    // appending the value from the button to the current number
    this.setState((prevState) => {
      return {
        number:
          prevState.number === '0' && value === '0' // prevents number from having multiple 0's at the beginning
            ? '0'
            : prevState.number % 1 === 0 && value !== '0' // if it's a whole number
            ? Number(prevState.number + value) // it returns a Number() to get rid of 0's in the front when a number is typed, also includes
            : prevState.number + value, // value !== "0" so you can type a 0 right after the comma
        result: prevState.operator ? prevState.result : '0', // this line resets the result if a new number was typed with no operator stored
      };
    });
  }

  // function to handle operator inputs
  handleOperatorInput(e) {
    const operation = e.target.innerHTML;

    this.setState((prevState) => {
      return {
        operator: operation,
        result: prevState.number ? prevState.number : prevState.result,
        number: operation === '-' && prevState.number === '0' ? '-' : '',
      };
    });
  }

  // function to handle equal input
  handleEqualInput() {
    let newResult = 0;
    switch (this.state.operator) {
      case '+':
        newResult = Number(this.state.result) + Number(this.state.number);
        break;
      case '-':
        newResult = this.state.result - this.state.number;
        break;
      case '*':
        newResult = this.state.result * this.state.number;
        break;
      case '/':
        newResult = this.state.result / this.state.number;
        break;
      default:
        newResult = this.state.number ? this.state.number : this.state.result;
    }

    this.setState({ number: '', operator: '', result: Number(newResult) });
  }

  // function to handle comma input
  handleCommaInput() {
    // concats "," to current number if number doesn't include one already
    if (this.state.number)
      this.setState({
        number: !this.state.number.toString().includes('.') ? this.state.number + '.' : this.state.number,
      });
  }

  // function to handle negation of number
  handleNegateInput() {
    if (!this.state.number && this.state.result) {
      // special case: number is empty and result isn't (e.g. after equal operation) it inverts the result
      this.setState({ result: -this.state.result });
    } else {
      // default case: negates current number
      this.setState({ number: -this.state.number });
    }
  }

  render() {
    const { number, result, operator } = this.state;
    return (
      <div className="calculator">
        <CalculatorDisplay output={number ? number : result + operator} />
        <div className="calculator-buttons">
          <CalculatorButton value="C" className="calculator-clear-button" onClick={this.handleClearInput} />
          <CalculatorButton value="+-" className="calculator-operation-button" onClick={this.handleNegateInput} />
          <CalculatorButton value="%" className="calculator-operation-button" onClick="" disabled="true" />
          <CalculatorButton value="/" className="calculator-operation-button" onClick={this.handleOperatorInput} />
          <CalculatorButton value="7" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalculatorButton value="8" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalculatorButton value="9" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalculatorButton value="*" className="calculator-operation-button" onClick={this.handleOperatorInput} />
          <CalculatorButton value="4" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalculatorButton value="5" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalculatorButton value="6" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalculatorButton value="-" className="calculator-operation-button" onClick={this.handleOperatorInput} />
          <CalculatorButton value="1" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalculatorButton value="2" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalculatorButton value="3" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalculatorButton value="+" className="calculator-operation-button" onClick={this.handleOperatorInput} />
          <CalculatorButton value="0" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalculatorButton value="." className="calculator-number-button" onClick={this.handleCommaInput} />
          <CalculatorButton value="=" className="calculator-equal-button span-two" onClick={this.handleEqualInput} />
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
      <button value={value} className={'calculator-button ' + className} onClick={onClick} disabled={disabled}>
        {value}
      </button>
    );
  }
}

export default Calculator;
