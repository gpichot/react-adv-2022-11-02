import React from "react";

import PokemonForm from "./features/pokemons/components/PokemonForm";
import PokemonList from "./features/pokemons/components/PokemonList";
import { PokemonDetail } from "./features/pokemons/types";
import pokemons from "./pokemonsList.json";

import "./globals.scss";

function App() {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>Toggle Form</button>
      {showForm && <PokemonForm />}
      <PokemonList pokemons={pokemons.results as PokemonDetail[]} />
    </div>
  );
}

export default App;
