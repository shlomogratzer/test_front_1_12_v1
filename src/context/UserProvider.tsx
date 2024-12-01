import React, { createContext, useEffect, useState } from "react";
import { IUser } from "../models/user";
import useFetch from "../Hooks/useFetch";

export interface Props {
  children: React.ReactNode;
}

export interface UserProps {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const UserContext = createContext<UserProps | null>(null);

const UserProvider = ({ children }: Props) => {
  const { postFetch } = useFetch("http://localhost:3000/auth/refreshUser");
  const [user, setUser] = useState<IUser | null>(null);
  const hendleRefrash = async () => {
    const data = await postFetch();
    console.log(data);

    setUser(data);
  };
  useEffect(() => {
    hendleRefrash();
  }, []);
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserProvider;
