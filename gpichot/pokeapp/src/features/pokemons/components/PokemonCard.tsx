import { useState } from "react";
import PropTypes from "prop-types";

import { PokemonDetail } from "../types";
import PokemonTypePill from "./PokemonTypePill";

import styles from "./PokemonCard.module.scss";

type PokemonCardProps = {
  pokemon: PokemonDetail;
};

export default function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const types = pokemon.types.map((type) => (
    <PokemonTypePill key={type} type={type} />
  ));

  return (
    <div
      className={styles.pokemonCard}
      style={{ backgroundColor: isHovered ? "#ffffff44" : "" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.pokemonContent}>
        <h2 className={styles.pokemonCardName}>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{types}</p>
      </div>
      <div className={styles.pokemonCardActions}>
        <button className={styles.pokemonCardButton}>Details</button>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(
      PropTypes.oneOf([
        "bug",
        "dark",
        "dragon",
        "electric",
        "fairy",
        "fighting",
        "fire",
        "flying",
        "ghost",
        "grass",
        "ground",
        "ice",
        "normal",
        "poison",
        "psychic",
        "rock",
        "steel",
        "water",
      ])
    ),
    image: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    base_experience: PropTypes.number.isRequired,
    forms: PropTypes.arrayOf(PropTypes.string).isRequired,
    abilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    stats: PropTypes.shape({
      hp: PropTypes.number.isRequired,
      attack: PropTypes.number.isRequired,
      defense: PropTypes.number.isRequired,
      "special-attack": PropTypes.number.isRequired,
      "special-defense": PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired,
    }).isRequired,
  }),
};
