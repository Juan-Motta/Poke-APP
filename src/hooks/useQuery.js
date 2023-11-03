import useSWR from 'swr';

export function useQuery(query, fetcher) {
    const {data, error, isLoading} = useSWR(query, fetcher);
    return {data, error, isLoading};
}
