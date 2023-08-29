import React, { useState } from "react";
import UserContext from "./user-context";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("")

  return (
    <UserContext.Provider value={{ user, setUser, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
