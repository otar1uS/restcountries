import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Country {
  name: {
    common: string;
    official: string;
  };
  subregion: string;
  tld: string[];
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [code: string]: string;
  };
  borders: string[];
  capital: string;
  population: number;
  region: string;
  flags: {
    png: string;
  };
}

const Details = ({ darkModeIsOn }: { darkModeIsOn: boolean }) => {
  const [country, setCountry] = useState<Country>();
  const { id } = useParams<{ id: string }>();

  let darkModeSwitcherDarkBlueToWhite = `${
    darkModeIsOn ? "bg-DarkBlue" : "bg-white"
  }`;
  let darkModeSwitcherTextColor = `${
    darkModeIsOn ? "text-white" : "text-DarkBlue"
  }`;

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${id?.toLowerCase()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching country data");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setCountry(data[0]);
        } else {
          setCountry(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, [id]);

  return (
    <>
      <div className="w-11/12 mx-auto mt-8   ">
        <Link
          to="/"
          className={`inline-flex items-center ${darkModeSwitcherDarkBlueToWhite} ${darkModeSwitcherTextColor} hover:bg-gray-300  font-semibold py-2 px-4 border border-DarkBlue  rounded shadow`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.707 3.293a1 1 0 0 1 0 1.414L6.414 9H18a1 1 0 1 1 0 2H6.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Go Back
        </Link>
      </div>
      {country && (
        <div className="w-11/12 mx-auto  mt-28  grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="xl:w-5/6 h-full sm:4/6">
            <img
              className="object-cover max-w-full h-full"
              src={country.flags.png}
              alt={`${country.name.common} flag`}
            />
          </div>
          <div
            className={`${darkModeSwitcherTextColor}  w-full  xl:text-[20px] sm:text-sm grid xl:grid-cols-2 xl:grid-rows-3 sm:grid-cols-1 sm:grid-rows-1  gap-4`}
          >
            <div className="col-span-2 ">
              <h1 className="text-[28px] font-semibold">
                {country.name.common}
              </h1>
            </div>
            <div className="col-span-1   ">
              <p className="mb-2 ">
                <span className="font-semibold  ">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>
              <p className="mb-2 ">
                <span className="font-semibold">Region:</span> {country.region}
              </p>
              <p className="mb-2 ">
                <span className="font-semibold">Sub Region:</span>{" "}
                {country.subregion}
              </p>
              <p className="mb-2 ">
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital}
              </p>
            </div>
            <div className="md:col-span-1 sm:col-span-full">
              <p className="mb-2 ">
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {country.tld.join(", ")}
              </p>
              <p className="mb-2 ">
                <span className="font-semibold">Currencies:</span>{" "}
                {Object.keys(country.currencies)[0]}
              </p>
              <p className="mb-2 ">
                <span className="font-semibold">Language:</span>{" "}
                {Object.entries(country.languages)
                  .map(([code, name]) => name)
                  .join(", ")}
              </p>
            </div>
            {country.borders && (
              <div className="col-span-2 ">
                <p className="font-semibold mb-2 flex gap-12  md:text-xl sm:text-md">
                  Border Countries:
                  {country.borders.slice(0, 3).map((borderCode) => (
                    <div className="border p-2 mr-4  text-sm " key={borderCode}>
                      {borderCode}
                    </div>
                  ))}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
