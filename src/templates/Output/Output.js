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

  return (
    <div className={classes.container}>
      <h1>{userName}</h1>
      <img alt="username's profile" src={info.avatar_url} />
      <h1>Followers: {info.followers}</h1>
      <h1>Following: {info.following}</h1>
    </div>
  );
};

export default Output;
