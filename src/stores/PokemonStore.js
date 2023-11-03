import {create} from 'zustand';

const usePokemonStore = create(set => ({
    pokemonFilterInput: '',
    pokemonQueryPageIndex: null,
    setPokemonQueryPageIndex: null,
}));

export {usePokemonStore};
