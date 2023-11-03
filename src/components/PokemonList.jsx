import PokemonCard from './PokemonCard';
import Button from './Button';
import {request} from 'graphql-request';
import {useQuery} from '../hooks/useQuery';
import {usePokemonStore} from '../stores/PokemonStore';
import {useState} from 'react';

const fetcher = ({query, variables}) =>
    request('https://beta.pokeapi.co/graphql/v1beta', query, variables).then(
        data => data.pokemons
    );

const query = `
query getPokemons($limit: Int, $offset: Int, $where: pokemon_v2_pokemon_bool_exp) {
    pokemons: pokemon_v2_pokemon(limit: $limit, offset: $offset, where: $where) {
        name
        id
        types: pokemon_v2_pokemontypes {
            type: pokemon_v2_type {
                id
                name
            }
        }
        color: pokemon_v2_pokemonspecy {
            color: pokemon_v2_pokemoncolor {
                id
                name
            }
        }
    }
}
`;

export default function PokemonList() {
    const [variables, setVariables] = useState({
        limit: 20,
        offset: 0,
    });
    const {data, error, isLoading} = useQuery({query, variables}, fetcher);

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
