import Input from "./templates/Input/Input.js";
import Output from "./templates/Output/Output";
import Title from "./templates/Title/Title.js";
import Footer from "./templates/Footer/Footer.js";

import "./App.css";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Title />
      <main className="container">
        <Input />
        <Output />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
