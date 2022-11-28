import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokeData, setPokeData] = useState([]);
  const [nameSearch, setNameSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((r) => r.json())
    .then((data) => setPokeData(data))
  }, [])

  // function handlePokeFormSubmit(newPoke) {
  //   setPokeData([...pokeData, newPoke])
  // }

  function handleOnNameChange(event) {
    setNameSearch(event.target.value)
    console.log(nameSearch)
  }

  const filteredPokeByName = pokeData
    .filter((pokemon) => pokemon.name.includes(nameSearch))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        // onPokeFormSubmit={handlePokeFormSubmit}
      />
      <br />
      <Search 
        handleOnChange={handleOnNameChange}
      />
      <br />
      <PokemonCollection
        pokeData={filteredPokeByName}
      />
    </Container>
  );
}

export default PokemonPage;
