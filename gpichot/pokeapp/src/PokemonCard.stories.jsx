import PokemonCard from "./PokemonCard";

export default {
  title: "Pokemons/PokemonCard",
  component: PokemonCard,
  actions: {
    onClick: "click",
  },
};

const Template = (args) => <PokemonCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  pokemon: {
    name: "Pikachu",
  },
};

export const DefaultWithRaichu = Template.bind({});
DefaultWithRaichu.args = {
  pokemon: {
    name: "Raichu",
  },
};
