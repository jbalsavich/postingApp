import { createResource, For, Show } from "solid-js";
import { A, useRouteData } from "solid-start";
import fetchAPI from "~/lib/api";
import './pokemon.css';

const Pokemon = (props) => {
    
  const [pokemon] = 
   
    createResource(() => `pokemon/${props.id}`, fetchAPI) 

  
  return (
    <Show when={pokemon()}>
      <div class="pokemon-info">
      <h1> {pokemon().name} </h1>
      <img class="pokemon-image"src={pokemon().sprites.front_default} />
      
      <ul>
        <div class="pokemon-type-info small">
        <For each={pokemon().types}>
          {(type) => (
            <li>
              <div class="type">
              <img title ={type.type.name} class={"icon " + type.type.name} src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${type.type.name}.svg`} />
              </div>
            </li>
          )}
        </For>

      </div>
      </ul>
      
      </div>
    </Show>
  );
};
export default Pokemon;
