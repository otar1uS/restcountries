import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string;
  population: number;
  region: string;
  flags: {
    png: string;
  };
}

interface Props {
  region?: string;
  searchedCountry: string;
  darkMode: boolean;
}

const Countries = ({ region, searchedCountry, darkMode }: Props) => {
  const [countries, setCountries] = useState<Country[]>([]);

  const navigate = useNavigate();

  let darkModeSwitcherDarkBlueToWhite = `${
    darkMode ? "bg-DarkBlue" : "bg-white"
  }`;
  let darkModeSwitcherTextColor = `${
    darkMode ? "text-white" : "text-DarkBlue"
  }`;

  let darkModeSwitcherVeryDarkBlueToVeryLightGray = `${
    darkMode ? "bg-VeryDarkBlue" : "bg-VeryLightGray"
  }`;

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/${region ? `region/${region}` : "all"}`
    )
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, [region]);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchedCountry.toLowerCase())
  );

  return (
    <div
      className={`${darkModeSwitcherVeryDarkBlueToVeryLightGray} grid mt-10 sm:grid-cols-1 sm:gap-16 md:grid-cols-2 md:gap-12 xl:grid-cols-4 xl:gap-16  `}
    >
      {filteredCountries.map((country) => (
        <div
          className={`flex  xl:w-full md:w-4/6 sm:w-3/6 flex-col gap-3 justify-center items-center rounded-xl ${darkModeSwitcherDarkBlueToWhite} ${darkModeSwitcherTextColor} shadow-md cursor-pointer w-full `}
          key={country.name.common}
          onClick={() => navigate(`/details/${country.name.common}`)}
        >
          <img
            className=" object-cover w-full h-full  rounded-t-xl  "
            src={country.flags.png}
            alt={`${country.name.common} flag`}
          />

          <div className="p-12   ">
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
