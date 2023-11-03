import useSWRInfinite from 'swr/infinite';
import {usePokemonStore} from '../stores/PokemonStore';

export function useQuery(query, fetcher) {
    const {data, error, isLoading, size, setSize} = useSWRInfinite(
        query,
        fetcher
    );
    usePokemonStore.setState({
        pokemonQueryPageIndex: size,
        setPokemonQueryPageIndex: setSize,
    });
    return {data, error, isLoading};
}
