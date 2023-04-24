import React from "react";
import Spinner from "../ui/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = (props) => {
  const { isLoading, data } = props;
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {data && data.length > 0 ? (
        data.map((countryData, index) => {
          return <CharacterItem key={index} countryData={countryData} />;
        })
      ) : (
        <h2>No data available</h2>
      )}
    </section>
  );
};

export default CharacterGrid;
