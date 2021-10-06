import React, { useState } from 'react';
import PokeCard from '../components/PokeCard';
import PokeInput from '../components/PokeInput';
import getPokemon from '../utils/http';

const MainContainer = () => {

  const [pokemon, setPokemon] = useState(null)

  const searchPokemon = async (input) => {
    const { data } = await getPokemon(input.toLowerCase());
    setPokemon(data);
  }

  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Pokemon</span>
        </div>
      </nav>
      <main class="container">
        <h1>Pokemon</h1>
        <PokeInput searchPokemon={searchPokemon} />
        { pokemon && <PokeCard pokemon={pokemon} /> }
      </main>
    </>
  )
}

export default MainContainer;
