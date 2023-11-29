import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ pokemon, retrieveNewCard }) {

  const[searchText, setSearchText] = useState('')

function bringSearchUp (search) {
  setSearchText(search)
}
console.log(searchText)


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm retrieveNewCard={retrieveNewCard} />
      <br />
      <Search bringSearchUp={bringSearchUp} />
      <br />
      <PokemonCollection pokemon={pokemon} searchText={searchText} />
    </Container>
  );
}

export default PokemonPage;
