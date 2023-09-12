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
      <div className={classes.nameWithImage}>
        <p>{userName}</p>
        <p>{info.name}</p>
        <img alt="username's profile" src={info.avatar_url} />
      </div>
      <div className={classes.otherInfo}>
        <p>Repos: {info.public_repos}</p>
        <p>Followers: {info.followers}</p>
        <p>Following: {info.following}</p>
      </div>
    </div>
  );
};

export default Output;
