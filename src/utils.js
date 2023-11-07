import { usePokemonStore } from "./stores/PokemonStore";

export default function updateFilter(value, type) {
    const limit = 20
    const offset = 0

    const { variables, setVariables } = usePokemonStore.getState();

    usePokemonStore.setState({ pokemons: [] });
    let where = {};
    if (type === 'color') {
        if (value.length > 0) {
            where = {
                ...variables.where, ...{ pokemon_v2_pokemonspecy: { pokemon_v2_pokemoncolor: { name: { _in: value } } } }
            };
        } else {
            delete variables.where.pokemon_v2_pokemonspecy
            where = { ...variables.where };
        }
    }
    if (type === 'type') {
        if (value.length > 0) {
            where = {
                ...variables.where, ...{ pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _in: value } } } }
            }
        } else {
            delete variables.where.pokemon_v2_pokemontypes
            where = { ...variables.where };
        }
    }

    if (type === 'name') {
        if (variables && variables.where && variables.where.id) {
            delete variables.where.id;
        }  
              where = {
            ...variables.where, ...{ name: { _ilike: `%${value}%` } }
        };
    }

    if (type === 'id') {
        if (variables && variables.where && variables.where.name) {
            delete variables.where.name;
        }  
        where = {
            ...variables.where, ...{ id: { _eq: parseInt(value) } }
        };
    }

    setVariables({ where, limit, offset, });
}


