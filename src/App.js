import Main from "./templates/Main/Main.js";
import Title from "./templates/Title/Title.js";
import Footer from "./templates/Footer/Footer.js";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Title />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
