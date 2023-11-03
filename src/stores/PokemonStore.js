import {create} from 'zustand';

const usePokemonStore = create(set => ({
    pokemonFilterInput: '',
    pokemons: {},
    pokemonQueryVariables: {},
}));

export {usePokemonStore};
