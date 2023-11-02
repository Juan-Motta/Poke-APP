export const GET_POKEMONS_QUERY = `
query getPokemons($limit: Int, $offset: Int) {
  pokemons: pokemon_v2_pokemon(limit: $limit, offset: $offset) {
    name
    id
    types: pokemon_v2_pokemontypes {
      type: pokemon_v2_type {
        name
        id
      }
    }
    color: pokemon_v2_pokemonspecy {
      color: pokemon_v2_pokemoncolor {
        name
        id
      }
    }
  }
}
`;
