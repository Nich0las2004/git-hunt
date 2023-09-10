import { useRef, useContext } from "react";
import UserContext from "../../context/user-context";

import classes from "./Input.module.css";

const Input = () => {
  const userNameRef = useRef(null);

  const { setUserName, setInfo } = useContext(UserContext);

  const searchHandler = async () => {
    setUserName(userNameRef.current.value);

    await fetch(`https://api.github.com/users/${userNameRef.current.value}`)
      .then((response) => {
        if (response.status === 404) {
          return setInfo(response);
        }
        response.json().then((data) => setInfo(data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <span className={classes.container}>
      <input className={classes.inputField} type="text" placeholder="Enter a Username" ref={userNameRef} />
      <button className={classes.searchButton} onClick={searchHandler}>Search</button>
    </span>
  );
};

export default Input;
