import "./App.css";
import Maths from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="Calculator">
        <Maths operation="Add" calculate="6+2" result={6 + 2} />
        <Maths operation="Subtract" calculate="6-2" result={6 - 2} />
        <Maths operation="Divide" calculate="6/2" result={6 / 2} />
      </div>
    </div>
  );
}

export default App;
