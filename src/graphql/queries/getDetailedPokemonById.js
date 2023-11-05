export const GET_DETAILED_POKEMON_BY_ID = `
query getDetailedPokemonById($limit: Int, $offset: Int, $where: pokemon_v2_pokemon_bool_exp) {
  pokemons: pokemon_v2_pokemon(limit: $limit, offset: $offset, where: $where) {
    name
    id
    types: pokemon_v2_pokemontypes {
      type: pokemon_v2_type {
        id
        name
      }
    }
    abilities: pokemon_v2_pokemonabilities {
      ability: pokemon_v2_ability {
        name
        id
        effects: pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
          description: short_effect
        }
      }
    }
    stats: pokemon_v2_pokemonstats {
      base_stat
      state: pokemon_v2_stat {
        name
      }
    }
    specy: pokemon_v2_pokemonspecy {
      color: pokemon_v2_pokemoncolor {
        id
        name
      }
      evolution: pokemon_v2_evolutionchain {
        pokemons: pokemon_v2_pokemonspecies {
          id
          name
          evolves_from_species_id
        }
      }
      gender_rate
      egggroups: pokemon_v2_pokemonegggroups {
        egggroup: pokemon_v2_egggroup {
          name
        }
      }
      description: pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}) {
        flavor_text
        pokemon_v2_version {
          id
        }
      }
    }
    height
    weight
  }
}
`;
