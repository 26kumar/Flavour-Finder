import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Mainpage from "./Component/Mainpage";
import { Routes, Route } from "react-router-dom";
import Mealinfo from "./Component/Mealinfo";
import InitialPage from "./Component/InitialPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<InitialPage />} /> */}
      <Route path="/" element={<Mainpage />} />
      <Route path="/:mealid" element={<Mealinfo />} />
    </Routes>
  );
}

export default App;
