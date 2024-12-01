import { Route, Routes } from "react-router-dom";
import LoginComp from "../components/login-comp/LoginComp";
import RegisterComp from "../components/register-comp/RegisterComp";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<LoginComp />} />
        <Route path="/users/register" element={<RegisterComp />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
