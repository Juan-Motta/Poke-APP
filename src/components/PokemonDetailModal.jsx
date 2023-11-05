import {useParams} from 'react-router-dom';
import {GET_DETAILED_POKEMON_BY_ID} from '../graphql/queries/getDetailedPokemonById';
import {useQuery} from '../hooks/useQuery';
import {request} from 'graphql-request';
import {useNavigate} from 'react-router-dom';

const fetcher = ({query, variables}) =>
    request('https://beta.pokeapi.co/graphql/v1beta', query, variables).then(
        data => data.pokemons[0]
    );

export default function PokemonDetailModal() {
    const navigate = useNavigate();
    const {pokemonId} = useParams();
    const {data, error, isLoading} = useQuery(
        {
            query: GET_DETAILED_POKEMON_BY_ID,
            variables: {
                limit: 1,
                offset: 0,
                where: {id: {_eq: pokemonId}},
            },
        },
        fetcher,
        false
    );

    function handleoutsideClick() {
        navigate('/pokemon');
    }
    return (
        <div
            onClick={handleoutsideClick}
            className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
        >
            <div
                onClick={e => {
                    e.stopPropagation();
                }}
                className="z-30 bg-white"
            >
                dadadasd
            </div>
        </div>
    );
}
