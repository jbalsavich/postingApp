import { createResource, For, Show } from "solid-js";
import { A, useRouteData } from "solid-start";
import fetchAPI from "~/lib/api";
import Pokemon from "~/components/Pokemon.jsx";
import './compare_pokemon.css';
export const routeData = (props) => {
  const poke1 = props.params.id.split('_')[0].toLowerCase();
  const poke2 = props.params.id.split('_')[1].toLowerCase();
  return [poke1, poke2];
};

const PokemonComparison = () => {
  const pokemon = useRouteData();
  return (
    <div class="pokemon-comparison-2">
      <Pokemon id={pokemon[0]} />
      <Pokemon id={pokemon[1]} />
    </div>
  );
};
export default PokemonComparison;
