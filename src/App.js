import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import PokemonGrid from "./components/pokemons/PokemonGrid";
// import Search from './components/ui/Search'
import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(`https://pokeapi.co/api/v2/pokemon`);

      //console.log(result.data.results);

      setPokemon(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, [pokemon.name]);

  return (
    <div className="container">
      <Header />
      {/* <Search getQuery={(q) => setQuery(q)} /> */}
      <PokemonGrid isLoading={isLoading} pokemon={pokemon} />
    </div>
  );
};

export default App;
