import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, searchText }) {
  
  const searchFilter = pokemon.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))

  const mappedPokemon = searchFilter.map(item => <PokemonCard key={item.id} name={item.name} image={item.sprites} hp={item.hp} />)

  return (
    <Card.Group itemsPerRow={6}>
      {mappedPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
