import Input from "../Input/Input"
import Output from "../Output/Output"

import classes from "./Main.module.css"

const Main = () => {
  return (
    <main className={classes.main}>
      <Input />
      <Output />
    </main>
  );
};

export default Main;
