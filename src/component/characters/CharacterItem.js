import React from "react";

const CharacterItem = ({ countryData }) => {
  const {
    population,
    name,
    timezones,
    region,
    flags,
    coatOfArms,
    currencies,
    independent,
    subregion,
    languages,
  } = countryData;

  const displayTimeZone = Array.isArray(timezones) ? timezones[0] : timezones;
  const formattedPopulation = population.toLocaleString();
  const getCurrency =
    currencies &&
    Object.values(currencies).map((currency) => (
      <span key={currency.name}>
        {currency.name} {currency.symbol}
      </span>
    ));

  const getLanguage =
    languages &&
    Object.values(languages)
      .map((language, index) => <span key={index}> {language}</span>)
      .reduce((prev, curr) => [prev, ", ", curr]);

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={flags.png} alt={`Flag of ${name.common} `} />
        </div>
        <div className="card-back">
          <h1>{name.common}</h1>
          <ul>
            <li>
              <strong>Official Name:</strong> {name.official}
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <strong>Coat of Arm:</strong>
              <img
                src={coatOfArms.svg}
                alt={`Coat of Arm of ${name.common} `}
                style={{
                  borderRadius: "100%",
                  width: "50px",
                  height: "50px",
                  marginLeft: "10px",
                }}
              />
            </li>

            <li>
              <strong>Region:</strong> {region}
            </li>
            <li>
              <strong>Sub Region:</strong> {subregion}
            </li>

            <li>
              <strong>Population:</strong> {formattedPopulation}
            </li>
            <li>
              <strong>Timezone:</strong> {displayTimeZone}
            </li>
            <li>
              <strong>Currency:</strong> {getCurrency}
            </li>
            <li>
              <strong>Independent:</strong> {independent ? "True" : "False"}
            </li>
            <li>
              <strong>
                {getLanguage && getLanguage.length === 1
                  ? "Language"
                  : "Languages"}
                :
              </strong>{" "}
              {getLanguage}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
