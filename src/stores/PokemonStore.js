import {create} from 'zustand';

const usePokemonStore = create(set => ({
    pokemonQueryPageIndex: null,
    setPokemonQueryPageIndex: null,
}));

export {usePokemonStore};
