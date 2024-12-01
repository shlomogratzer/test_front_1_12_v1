import React, { useContext, useEffect } from "react";
import useFatch from "../../Hooks/useFetch";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

const LogoutComp = () => {
  const { postFetch } = useFatch<any>("http://localhost:3000/auth/logout");
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(userContext?.user);
  }, [userContext?.user]);
  return (
    <button
      onClick={async () => {
        if (userContext?.user) {
          await postFetch();
          userContext.setUser(null);
        } else {
          navigate("/login");
        }
      }}
    >
      {userContext?.user ? "logout" : "login"}
    </button>
  );
};

export default LogoutComp;
