import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFatch from "../../Hooks/useFetch";
import Styles from "./register.module.css";
import { IUser } from "../../models/user";

export default function RegisterComp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("passenger");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const { postFetch } = useFatch<IUser>(`http://localhost:3000/users`);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    try {
      const res = await postFetch({ name, email, password, role });
      console.log(res);

      navigate("/login");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className={Styles.formContainer}>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          className={Styles.input}
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className={Styles.input}
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          className={Styles.input}
          type={showPassword ? "text" : "password"}
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="role">role</label>
        <select
          className={Styles.input}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="passenger">passenger</option>
          <option value="driver">driver</option>
          <option value="admin">admin</option>
        </select>
        <label htmlFor="showPassword">הצג סיסמה</label>
        <input
          type="checkbox"
          id=""
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <div>
          <button className={Styles.button} type="submit">
            Register
          </button>

          <button
            className={Styles.button}
            type="button"
            onClick={() => navigate("/auth/login")}
          >
            close
          </button>
        </div>
      </form>
    </div>
  );
}
