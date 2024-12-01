import React from "react";
import LogoutComp from "../components/logout-comp/LogoutComp";

interface Props {
  children: React.ReactNode;
}
const MainComp = ({ children }: Props) => {
  return (
    <>
      <LogoutComp />
      <main>{children}</main>
    </>
  );
};

export default MainComp;
