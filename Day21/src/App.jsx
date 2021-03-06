import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;

ReactDOM.render(React.createElement(App), document.getElementById("root"));
