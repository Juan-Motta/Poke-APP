import useSWR from 'swr';
import {usePokemonStore} from '../stores/PokemonStore';

export function useQuery(query, fetcher, store = true) {
    const {data, error, isLoading} = useSWR(query, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
    });
    if (data && store) {
        const pokemons = usePokemonStore.getState().pokemons;
        data.map(pokemon => {
            pokemons[pokemon.id] = pokemon;
            usePokemonStore.setState({pokemons});
        });
    }
    return {data, error, isLoading};
}
