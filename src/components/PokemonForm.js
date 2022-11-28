import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onPokeFormSubmit } ) {

  const [newName, setNewName] = useState("")
  const [newHp, setNewHp] = useState("")
  const [newFrontImage, setNewFrontImage] = useState("")
  const [newBackImage, setNewBackImage] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    const newPokemon = {
      name: newName,
      hp: newHp,
      sprites: {
        front: newFrontImage,
        back: newBackImage
    }}
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon)
    })
    .then((response) => response.json())
    .then(onPokeFormSubmit)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={newHp}
            onChange={(e) => setNewHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newFrontImage}
            onChange={(e) => setNewFrontImage(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newBackImage}
            onChange={(e) => setNewBackImage(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
