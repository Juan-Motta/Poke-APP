import PokemonCard from './PokemonCard';
import Button from './Button';
import {request} from 'graphql-request';
import {useQuery} from '../hooks/useQuery';
import {useFunctionStore} from '../stores/AppStore'

const fetcher = query =>
    request('https://beta.pokeapi.co/graphql/v1beta', query).then(
        data => data.pokemons
    );

const getKey = (pageIndex, previousPageData) => {
    const offset = pageIndex ? pageIndex : 0;
    const limit = 20;
    return `
    query getPokemons {
        pokemons: pokemon_v2_pokemon(limit: ${limit}, offset: ${
            offset * limit
        }) {
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
};

export default function PokemonList() {
    const {data, error, isLoading} = useQuery(getKey, fetcher);

    function handleLoad(e) {
        e.preventDefault();
        const setSize = useFunctionStore.getState().setSize;
        const size = useFunctionStore.getState().size;
        setSize(size + 1);
    }

    return (
        <section className="ml-16 mt-9" style={{width: 'calc(84% - 64px)'}}>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul className="flex flex-wrap">
                    {data.flat().map(pokemon => {
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
                    })}
                </ul>
            )}
            <Button
                title="Load more"
                onClick={handleLoad}
            />
        </section>
    );
}
