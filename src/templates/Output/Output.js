import classes from "./Output.module.css";
import UserContext from "../../context/user-context";
import { useContext, useEffect } from "react";

const Output = () => {
  const { userName, info } = useContext(UserContext);

  useEffect(() => {
    console.log(info);
  }, [info]);

  if (info === null) {
    return (
      <div className={classes.container}>
        <h1>{userName}</h1>
        <p>Enter a Username</p>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <h1>{userName}</h1>
      <img src={info.avatar_url} />
    </div>
  );
};

export default Output;
