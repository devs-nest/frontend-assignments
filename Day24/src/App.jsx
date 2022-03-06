import { render } from "react-dom";
import Calculator from "./components/Calculator";
import Conditional from "./components/Conditional";
import Lifting from "./components/LiftingState";
import "./Style.css";

function App() {
  return (
    <div className="App">
      <Calculator />
      <Conditional />
      <Lifting />
    </div>
  );
}

export default App;

render(<App />, document.getElementById("root"));
