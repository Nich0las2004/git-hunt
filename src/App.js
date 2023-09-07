import Input from "./templates/Input/Input.js";
import Output from "./templates/Output/Output";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <span>
        <h1>Git Hunt</h1>
      </span>
      <Input />
      <Output />
    </div>
  );
};

export default App;
