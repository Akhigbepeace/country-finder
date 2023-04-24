import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/ui/Header";
import axios from "axios";
import CharacterGrid from "./component/characters/CharacterGrid";
import Search from "./component/ui/Search";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await axios(`https://restcountries.com/v3.1/all`);
      console.log(res.data);
      setData(res.data);
      setIsLoading(false);
    };

    const searchData = async () => {
      try {
        const res = await axios(`https://restcountries.com/v3.1/name/${query}`);
        setData(res.data);
        setIsLoading(false);
        setErrorMsg("");
      } catch (error) {
        setErrorMsg("Country doesn't exist. Please input a correct value");
      }
    };

    if (query) {
      searchData();
    } else {
      fetchCountry();
      setErrorMsg("");
    }
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />

      {errorMsg ? (
        <p>{errorMsg}</p>
      ) : (
        <CharacterGrid isLoading={isLoading} data={data} />
      )}
    </div>
  );
}

export default App;
