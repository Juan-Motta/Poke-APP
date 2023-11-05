export const GET_POKEMONS = `
query getPokemons($limit: Int, $offset: Int, $where: pokemon_v2_pokemon_bool_exp) {
  pokemons: pokemon_v2_pokemon(limit: $limit, offset: $offset, where: $where) {
      name
      id
      types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
              id
              name
          }
      }
      color: pokemon_v2_pokemonspecy {
          color: pokemon_v2_pokemoncolor {
              id
              name
          }
      }
  }
}
`;
