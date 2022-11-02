import React from "react";

type PokemonCardProps = {
  /**
   * Pokemon details
   */
  pokemon: { name: string };
  /**
   * Est premium
   */
  isPremium: boolean;
} & React.ComponentPropsWithoutRef<"div">;

function PokemonCard(props: PokemonCardProps) {
  const { pokemon, ...otherProps } = props;
  const { name } = pokemon;

  return (
    <div {...otherProps}>
      <h2>{name}</h2>
    </div>
  );
}

export default PokemonCard;
