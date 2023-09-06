import React, { useState } from "react";
import UserContext from "./user-context";

const UserProvider = ({ children }) => {
  const [info, setInfo] = useState(null);
  const [userName, setUserName] = useState("")

  return (
    <UserContext.Provider value={{ info, setInfo, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
