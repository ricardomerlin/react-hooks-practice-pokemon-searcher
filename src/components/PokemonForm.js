import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ retrieveNewCard }) {

const[newName, setNewName] = useState('')
const[newHP, setNewHP] = useState('')
const[newFrontImg, setNewFrontImg] = useState('')
const[newBackImg, setNewBackImg] = useState('')

const[newItem, setNewItem] = useState('')

function handleSubmit(e) {
  e.preventDefault()
  const pokeCard = {
    "name": newName,
    "hp": parseFloat(newHP),
    "sprites": {
      "front": newFrontImg,
      "back": newBackImg,
    }
  }
  setNewItem(pokeCard)
  fetch('http://localhost:3001/pokemon', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(pokeCard)
  })
  .then(res => res.json())
  .then(data => {
    retrieveNewCard(data)
  })
}

console.log(newItem)

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => setNewName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => setNewHP(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setNewFrontImg(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setNewBackImg(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
