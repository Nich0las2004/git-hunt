import classes from "./Output.module.css";
import UserContext from "../../context/user-context";
import { useContext } from "react";

const Output = () => {
  const { userName } = useContext(UserContext);

  return (
    <div className={classes.container}>
      <h1>{userName}</h1>
      <img />
    </div>
  );
};

export default Output;
