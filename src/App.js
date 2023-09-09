import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./Components/Search";

const App = () => {
  const [display, setDisplay] = useState({});
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let value = await fetch("https://pokeapi.co/api/v2/pokemon  ");
        let data = await value.json();
        setDisplay(data);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchData();
  });

  let names;
  if (display.results) {
    names = display.results.map((el) => el.name);
  } else {
    names = [];
  }
  const search = (char) => {
    setInput(char.target.value);
  };

  return (
    <>
      <center>
        <Search value={input} change={search} />
      </center>
      <div className="container">
        {names
          .filter((el) => el.toLowerCase().includes(input.toLowerCase()))
          .map((el, i) => (
            <div key={el} className="pokemon">
              <img
                className="image"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
                  i + 1
                }.png`}
              />
              <p>{el}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default App;
