import PokemonCard from './PokemonCard';
import Button from './Button';
import {request} from 'graphql-request';
import {useQuery} from '../hooks/useQuery';
import {usePokemonStore} from '../stores/PokemonStore';
import {useState} from 'react';
import {GET_POKEMONS} from '../graphql/queries/getPokemons';
import {useNavigate} from 'react-router-dom';

const fetcher = ({query, variables}) =>
    request('https://beta.pokeapi.co/graphql/v1beta', query, variables).then(
        data => data.pokemons
    );

export default function PokemonList() {
    const navigate = useNavigate();
    const [variables, setVariables] = useState({
        limit: 20,
        offset: 0,
    });
    const {data, error, isLoading} = useQuery(
        {query: GET_POKEMONS, variables},
        fetcher
    );

    usePokemonStore.setState({
        variables,
        setVariables,
    });

    function handleLoad(e) {
        e.preventDefault();
        setVariables(prev => ({...prev, offset: prev.offset + 20}));
    }

    return (
        <section className="ml-16 mt-9" style={{width: 'calc(84% - 64px)'}}>
            {isLoading && usePokemonStore.getState().pokemons.lenght === 0 ? (
                <div>Loading...</div>
            ) : (
                <ul className="flex flex-wrap">
                    {Object.values(usePokemonStore.getState().pokemons).map(
                        pokemon => {
                            return (
                                <li
                                    key={pokemon.id}
                                    style={{width: 'calc(100%/3 - 1.25rem)'}}
                                    className="ml-5"
                                    onClick={() =>
                                        navigate(`/pokemon/${pokemon.id}`)
                                    }
                                >
                                    <PokemonCard
                                        pokemonId={pokemon.id}
                                        pokemonName={pokemon.name}
                                        pokemonTypes={pokemon.types}
                                        pokemonColor={pokemon.color}
                                    />
                                </li>
                            );
                        }
                    )}
                </ul>
            )}
            <Button title="Load more" onClick={handleLoad} />
        </section>
    );
}
