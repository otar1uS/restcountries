import { useState } from "react";
import { BsMoonStars } from "react-icons/bs";

const Header = ({
  isDarkModeOn,
}: {
  isDarkModeOn: (isItOn: boolean) => void;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  let darkModeSwitcherDarkBlueToWhite = `${
    !isDarkMode ? "bg-DarkBlue" : "bg-white"
  }`;
  let darkModeSwitcherTextColor = `${
    !isDarkMode ? "text-white" : "text-DarkBlue"
  }`;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    isDarkModeOn(isDarkMode);
  };
  return (
    <div
      className={`${darkModeSwitcherTextColor} ${darkModeSwitcherDarkBlueToWhite} flex items-center justify-center    h-24  relative top-0 left-0 w-full `}
    >
      <div className="w-11/12 mx-auto items-center justify-between  flex">
        <h1 className="text-xl font-bold">Where in the world?</h1>
        <h2
          className="text-sm flex w-30 gap-4 items-center "
          onClick={toggleDarkMode}
        >
          <span>
            <BsMoonStars size={18} onClick={() => {}} />
          </span>
          Dark Mode
        </h2>
      </div>
    </div>
  );
};

export default Header;
