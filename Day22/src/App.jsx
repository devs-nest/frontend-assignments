import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Calculator from './components/Calculator';
import Conditional from './components/Conditional';

function App() {
  return (
    <div className="App">
      <Calculator />
      <Conditional/>
    </div>
  );
}

export default App;



ReactDOM.render(React.createElement(App), document.getElementById("root"));
