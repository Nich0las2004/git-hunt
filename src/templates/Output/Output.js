import classes from "./Output.module.css";
import UserContext from "../../context/user-context";
import { useContext, useEffect } from "react";

const Output = () => {
  const { userName, info } = useContext(UserContext);

  useEffect(() => {
    console.log(info);
  }, [info]);

  if (info === null || info.message == "Not Found") {
    return (
      <div className={classes.userNotFound}>
        <p>User Not Found</p>
      </div>
    );
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
