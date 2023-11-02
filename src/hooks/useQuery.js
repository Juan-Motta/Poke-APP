import useSWRInfinite from 'swr/infinite';
import {useFunctionStore} from '../stores/AppStore';

export function useQuery(query, fetcher) {
    const {data, error, isLoading, size, setSize} = useSWRInfinite(
        query,
        fetcher
    );
    useFunctionStore.setState({size, setSize});
    return {data, error, isLoading};
}
