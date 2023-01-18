//make a route where there is a search bar and a list of pokemon
//when you type in the search bar, the list of pokemon should filter
//when you click on a pokemon, it should take you to the pokemon page
//
import { createSignal, onMount, For } from "solid-js";
import { A } from "solid-start";
import './pokemon_finder.css'
export default function PokemonFinder() {
    const [pokemon, setPokemon] = createSignal([]);
    const [search, setSearch] = createSignal("");
    const [enableAll, setEnableAll] = createSignal(false);
    const minUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151";
    const maxUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279";
    
    async function fetchPokemon  (url)  {
        if(!url) url = minUrl;
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data.results);
    };
    
    onMount(fetchPokemon);
    function changeEnableAll() {

        setEnableAll(!enableAll());
        fetchPokemon(!enableAll() ? minUrl : maxUrl);
        //refresh the component

        console.log(pokemon().length + " " + enableAll());

    }
    return (
        <main>
        <h1>Pokemon Finder</h1>
        <input
            type="text"
            placeholder="Search for a pokemon"
            onInput={(e) => setSearch(e.target.value)}
        />
        <ul>
            <input type="checkbox" onClick={changeEnableAll}>Enable All</input>
            <label for="enableAll">Enable All</label>
            <For each={pokemon().filter((p) => p.name.includes(search()))}>
            
            {(p) => (
                <li>
                    <A href={`/pokemon/${p.name}`}>
                    <div class="pokemon">
                        <h1>
                            {p.name}
                        </h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.split("/")[6]}.png`} />
                    </div>
                    
                    
                        
                    </A>
                   
                
                    
                    
                
                </li>
            )}
            </For>
        </ul>
        </main>
    );
    }