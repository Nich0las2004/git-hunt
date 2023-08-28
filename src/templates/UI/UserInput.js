import { useRef } from "react";
const UserInput = () => {
  const userNameRef = useRef(null);

  const searchHandler = () => {
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
