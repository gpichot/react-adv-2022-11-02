import { ComponentMeta, ComponentStory } from "@storybook/react";

import pokemon from "@/pokemon.json";

import { PokemonDetail } from "../types";
import PokemonCard from "./PokemonCard";

export default {
  title: "PokemonCard",
  component: PokemonCard,
} as ComponentMeta<typeof PokemonCard>;

const Template: ComponentStory<typeof PokemonCard> = (args) => (
  <PokemonCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pokemon: pokemon as PokemonDetail,
};

export const WithImage = Template.bind({});
WithImage.args = {
  pokemon: {
    ...(pokemon as PokemonDetail),
    name: "Test",
  },
};
