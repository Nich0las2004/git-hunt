import classes from "./Output.module.css";
import UserContext from "../../context/user-context";
import { useContext, useEffect } from "react";

const Output = () => {
  const { userName, info } = useContext(UserContext);

  useEffect(() => {
    console.log(info);
  }, [info]);

  if (info === null) {
    return <div className={classes.container}></div>;
  }

  if (info.message === "Not Found") {
    return (
      <div className={classes.container}>
        <p>User Not Found</p>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <h1>Username: {userName}</h1>
      <img src={info.avatar_url} />
      <h1>Followers: {info.followers}</h1>
      <h1>Following: {info.following}</h1>
    </div>
  );
};

export default Output;
