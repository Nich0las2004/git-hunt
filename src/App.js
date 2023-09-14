import Main from "./templates/Main/Main.js";
import Header from "./templates/Header/Header.js";
import Footer from "./templates/Footer/Footer.js";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
