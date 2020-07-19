import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "../ui/Spinner";

const PokemonItem = ({ pokemon }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );

      //console.log(result.data);
      setAbilities(result.data.abilities.map((p) => p.ability.name));
      setPokemons(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemons.id}.png`}
              alt=""
            />
          </div>
          <div className="card-back">
            <h1>{pokemons.name}</h1>
            <ul>
              <li>
                <strong>Pokemon Name:</strong> {pokemons.name}
              </li>
              <li>
                <strong>
                  Ability:{" "}
                  {abilities.map((a) => {
                    return a + " ";
                  })}
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default PokemonItem;
