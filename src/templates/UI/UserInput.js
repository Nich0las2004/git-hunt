import { useRef, useContext } from "react";
import UserContext from "../../context/user-context";

const UserInput = () => {
  const userNameRef = useRef(null);

  const { setUserName } = useContext(UserContext)

  const searchHandler = () => {
    setUserName(userNameRef.current.value)

    alert(userNameRef.current.value);
  };

  return (
    <span>
      <input type="text" ref={userNameRef} />
      <button onClick={searchHandler}>Search</button>
    </span>
  );
};

export default UserInput;
