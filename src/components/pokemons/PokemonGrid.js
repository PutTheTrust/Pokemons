import React from "react";
import PokemonItem from "./PokemonItem";
import Spinner from "../ui/Spinner";

const PokemonGrid = ({ pokemon, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {pokemon.map((p) => (
        <PokemonItem key={p.name} pokemon={p}></PokemonItem>
      ))}
    </section>
  );
};

export default PokemonGrid;
