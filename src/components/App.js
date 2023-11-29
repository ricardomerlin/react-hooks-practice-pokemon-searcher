import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const[pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch ('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => {
      setPokemon(data)
    })
  }, [])

  console.log(pokemon)

  function retrieveNewCard(data) {
    setPokemon([...pokemon, data])
  }

  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} retrieveNewCard={retrieveNewCard}/>
    </div>
  );
}

export default App;
