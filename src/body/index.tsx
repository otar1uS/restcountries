import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Countries from "../countries";

const Body = ({ darkModeIsOn }: { darkModeIsOn: boolean }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [showItems, setShowItems] = useState(false);

  const [searchedItem, setSearching] = useState("");

  const options = ["Africa", "Asia", "Europe", "Oceania"];

  let darkModeSwitcherVeryDarkBlueToVeryLightGray = `${
    darkModeIsOn ? "bg-VeryDarkBlue" : "bg-VeryLightGray"
  }`;
  let darkModeSwitcherDarkBlueToWhite = `${
    darkModeIsOn ? "bg-DarkBlue" : "bg-white"
  }`;
  let darkModeSwitcherTextColor = `${
    darkModeIsOn ? "text-white" : "text-DarkBlue"
  }`;
  let darkModeSwitcherPlaceHolder = `${
    darkModeIsOn ? "placeholder-white" : ""
  }`;

  const handleSelect = (option: string) => {
    setSelectedItem(option);
    setShowItems(false);
  };
  return (
    <div className="w-11/12 mx-auto ">
      <div
        className={`w-full h-screen pt-10 ${darkModeSwitcherVeryDarkBlueToVeryLightGray} `}
      >
        <div className="flex justify-between  w-full items-center">
          <div
            className={` w-1/3  flex gap-3 items-center p-3 rounded-sm ${darkModeSwitcherDarkBlueToWhite} `}
          >
            <BsSearch
              size={14}
              className={`w-16  ${darkModeSwitcherTextColor}`}
            />
            <input
              type="text"
              placeholder="Search for a country..."
              className={`${darkModeSwitcherPlaceHolder}   border-none outline-none w-full text-sm  ${darkModeSwitcherDarkBlueToWhite} ${darkModeSwitcherTextColor}`}
              onChange={(e) => setSearching(e.target.value)}
            />
          </div>
          <div
            className={`relative inline-block text-left  ${darkModeSwitcherVeryDarkBlueToVeryLightGray}`}
          >
            <div>
              <button
                type="button"
                className={` ${darkModeSwitcherTextColor} ${darkModeSwitcherDarkBlueToWhite} cursor-pointer w-44  inline-flex   justify-between   items-center shadow-sm  rounded border border-gray-700 px-3 py-2 text-sm  font-medium focus:outline-none `}
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={() => setShowItems(!showItems)}
              >
                {selectedItem ? selectedItem : "Filter by Region"}
                <svg
                  className={`-mr-1 ml-8 h-4 w-5 ${darkModeSwitcherDarkBlueToWhite}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12l-8-8 1.5-1.5L10 9.01l6.5-6.51L18 4l-8 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {showItems && (
              <div
                className={`origin-top-right absolute right-0 mt-2 w-full rounded ${darkModeSwitcherVeryDarkBlueToVeryLightGray} shadow-lg  ${darkModeSwitcherDarkBlueToWhite} `}
              >
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className={`${darkModeSwitcherTextColor} ${darkModeSwitcherVeryDarkBlueToVeryLightGray}  ${darkModeSwitcherDarkBlueToWhite}border-none  cursor-pointer block w-full text-left px-4 py-2 text-sm   "
                `}
                      role="menuitem"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <Countries
          darkMode={darkModeIsOn}
          region={selectedItem}
          searchedCountry={searchedItem}
        />
      </div>
    </div>
  );
};

export default Body;
