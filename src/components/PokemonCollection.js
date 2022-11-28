import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeData }) {

  const pokeDataCollection = pokeData.map((poke) => {
    return (
      <PokemonCard
        key={poke.id}
        poke={poke}
      />
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>{pokeDataCollection}</h1>
    </Card.Group>
  );
}

export default PokemonCollection;
