import React, { Component } from "react";
import "./Calculator.css";

const SaveComponent = (props) => {
  return (
    <div>
      <p>
        <input onChange={props.handleChange} value={props.text} />
      </p>
      <button onClick={props.handleSave}>Save</button>
    </div>
  );
};

const EditComponent = (props) => {
  return <button onClick={props.handleEdit}>Edit</button>;
};

const If = (props) => {
  const condition = props.condition || false;
  const positive = props.then || null;
  const negative = props.else || null;

  return condition ? positive : negative;
};

class Conditional extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", inputText: "", mode: "view" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  handleSave() {
    this.setState({ text: this.state.inputText, mode: "view" });
  }

  handleEdit() {
    this.setState({ mode: "edit" });
  }

  render() {
    const view = this.state.mode === "view";
    const editComponent = <EditComponent handleEdit={this.handleEdit} />;
    const saveComponent = (
      <SaveComponent
        handleChange={this.handleChange}
        handleSave={this.handleSave}
        text={this.state.inputText}
      />
    );

    return (
      <div className="conditional">
        <p>Note: {this.state.text}</p>
        <If condition={view} then={editComponent} else={saveComponent} />
      </div>
    );
  }
}
export default Conditional;
