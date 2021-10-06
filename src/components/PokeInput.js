import React, { useState } from 'react';

const PokeInput = ({ searchPokemon }) => {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Type a Pokémon" onChange={handleChange} />
        <button class ="btn btn-outline-secondary" type ="button" onClick={() => searchPokemon(input)}>Button</button>
      </div>
    </div>
  )
}

export default PokeInput
