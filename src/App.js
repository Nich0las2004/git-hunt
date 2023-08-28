import UserInput from "./templates/UI/UserInput";
import Output from "./templates/Output/Output";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <span>
        <h1>Git Hunt</h1>
      </span>
      <UserInput />
      <Output />
    </div>
  );
};

export default App;
