import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./header";
import Body from "./body";
import Details from "./details";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);
  const [showScroll, setScrollShow] = useState("");
  const isDarkModeOnCheck = (isItOn: boolean) => {
    return setIsOn(isItOn);
  };
  let darkModeSwitcherDarkBlueToWhite = `${
    isOn ? "bg-VeryDarkBlue" : "bg-VeryLightGray"
  }`;

  const location = useLocation();

  useEffect(() => {
    setScrollShow(`${location.pathname === "/" ? "overflow-y-scroll" : ""}`);
  }, [location.pathname]);

  return (
    <div
      className={`w-full ${showScroll} h-screen font-sans  ${darkModeSwitcherDarkBlueToWhite} `}
    >
      <Header isDarkModeOn={isDarkModeOnCheck} />
      <Routes>
        <Route path="/" element={<Body darkModeIsOn={isOn} />} />
        <Route path="/details/:id" element={<Details darkModeIsOn={isOn} />} />
      </Routes>
    </div>
  );
}

export default App;
