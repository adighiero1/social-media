import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null //checks to see if there is user in local storage
  );

  const login = () => {
    //to DO
    setCurrentUser({
      id: 1,
      name: "Alejandro Dighiero",
      profilePic:
        "https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/292232725_2141694376002679_4826317906615959099_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1qEPMAUUpEEAX_oy0-Q&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfCRKxFVD-yYQyehVLhIXbbpIu-bCr0jGGEXm00RQSmPlg&oe=63FA5179",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser)); // cannot store object inside local storage. must stringify the json object.
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
