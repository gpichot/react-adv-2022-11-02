import React from "react";

import { PokemonDetail } from "../types";
import PokemonCard from "./PokemonCard";

export default function PokemonList({
  pokemons,
}: {
  pokemons: PokemonDetail[];
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
        gridGap: "1rem",
        padding: "1rem",
      }}
    >
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
