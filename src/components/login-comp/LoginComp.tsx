import React, { useContext, useState } from "react";
import Stiles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import useFatch from "../../Hooks/useFetch";
import { IUser } from "../../models/user";
import { UserContext } from "../../context/UserProvider";
const LoginComp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { postFetch } = useFatch<IUser>(`http://localhost:3000/auth/login`);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    try {
      const res = await postFetch({ email, password });
      console.log(res);

      userContext?.setUser(res.foundUser);
      // navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <div className={Stiles.formContainer}>
        <form onSubmit={handleSubmit} className={Stiles.form}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className={Stiles.input}
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            className={Stiles.input}
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="showPassword">הצג סיסמה</label>
          <input
            type="checkbox"
            id=""
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <div>
            <button type="submit" className={Stiles.button}>
              Login
            </button>
            <button type="button" className={Stiles.button}>
              close
            </button>
          </div>
          <Link to="/users/register">sign up</Link>
        </form>
      </div>
    </>
  );
};

export default LoginComp;
