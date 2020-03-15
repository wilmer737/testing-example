
async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  if (response.ok) {
    return response.json()
  }
}

export default getPokemon