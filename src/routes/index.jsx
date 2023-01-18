import { A } from "@solidjs/router";
import { Title } from "solid-start";
import Counter from "~/components/Counter";
export default function Home() {
  return (
    <main>
      <Title> API Example </Title>
      <h3> <font color="red"> Error </font> This site still has issues if you use an invalid id/name, for now please just use ids in between 1 and 1279 or use the name of the pokemon, if you need help finding it use the pokemon finder please </h3>
      <h1> API Example </h1>
      <p>
        This example shows how to use the <code>createResource</code> hook to
        fetch data from an API.
      </p>
      <p>
        you can go to <code>/pokemon/name</code> to see a pokemon <span>   </span>
        <A href="/pokemon/Charizard">Charizard</A>
      </p>
      <p>
        or <code>/pokemon/id</code> to see a pokemon <span>   </span>
        <A href="/pokemon/6">Charizard</A>
      </p>
      <p>
        or <code>/compare_pokemon/id1_id2</code> to see a pokemon <span>   </span>
        <A href="/compare_pokemon/6_25">Charizard vs Pikachu</A>
      </p>
      <p>
        or <code>/compare_pokemon/name1_name2</code> to see a pokemon <span>   </span>
        <A href="/compare_pokemon/Charizard_Pikachu">Charizard vs Pikachu</A>
      </p>
      <p>
        or <code>/compare_pokemon/id1_name2</code> to see a pokemon <span>   </span>
        <A href="/compare_pokemon/6_Pikachu">Charizard vs Pikachu</A>
      </p>
      <p>
        or <code>/pokemon_finder</code> to see the list of pokemon <span>   </span>
        <A href="/pokemon_finder">Pokemon Finder</A>
      </p>



    </main>
  );
}
