import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainComp from "./Layout/MainComp";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <MainComp children={<AppRoutes />} />
    </>
  );
}

export default App;
