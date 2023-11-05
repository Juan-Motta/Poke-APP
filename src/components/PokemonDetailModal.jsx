import {useParams} from 'react-router-dom';
import {GET_DETAILED_POKEMON_BY_ID} from '../graphql/queries/getDetailedPokemonById';
import {useQuery} from '../hooks/useQuery';
import {request} from 'graphql-request';
import {useNavigate} from 'react-router-dom';
import POKEMON_COLORS from '../constants/pokemonColors';
import WeightIcon from './WeightIcon';
import RulerIcon from './RulerIcon';

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

    //TODO: make utility
    function formatUrl() {
        let url = '';
        if (parseInt(pokemonId) < 1000) {
            url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(
                pokemonId
            ).padStart(3, '0')}.png`;
        } else if (parseInt(pokemonId) >= 1000 && parseInt(pokemonId) < 1010) {
            url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`;
        } else {
            url = misteriousPokemon;
        }
        return url;
    }

    function handleoutsideClick() {
        navigate('/pokemon');
    }

    return (
        <div
            onClick={handleoutsideClick}
            className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
        >
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <section
                    onClick={e => {
                        e.stopPropagation();
                    }}
                    className={`z-30 flex flex-col w-1/3 rounded-md ${
                        POKEMON_COLORS[data.specy.color.name.toUpperCase()]
                            .colorClass
                    }`}
                >
                    <div className="flex justify-between px-10 pt-8">
                        <h2 className="text-3xl font-bold text-white">
                            {data.name}
                        </h2>
                        <span className="text-3xl font-bold text-white">
                            #{String(pokemonId).padStart(3, '0')}
                        </span>
                    </div>
                    <div className="z-10 flex justify-center w-full pb-4">
                        <img src={formatUrl()} alt={data.id} />
                    </div>
                    <div className="pt-16 m-2 -mt-20 bg-white rounded-md">
                        <div className="flex justify-center">
                            <div className="flex gap-2 h-100">
                                {data.types.map(({type}) => (
                                    <span
                                        key={type.name}
                                        className={`px-2 py-1 mb-1 text-white rounded-md ${type.name}`}
                                    >
                                        {type.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col my-5">
                            <span
                                className={`mx-auto text-xl font-bold ${
                                    POKEMON_COLORS[
                                        data.specy.color.name.toUpperCase()
                                    ].textColorClass
                                }`}
                            >
                                About
                            </span>
                            <hr className="mx-6 mt-3" />
                        </div>
                        <div className="mx-6 mb-5">
                            <p>{data.specy.description[0].flavor_text}</p>
                        </div>
                        <div className="flex mb-5">
                            <div className="flex flex-col items-center justify-end w-1/3">
                                <div className="flex gap-2 my-auto">
                                    <WeightIcon width={28} height={28} />
                                    <span>{parseFloat(data.weight*0.1).toFixed(1)} kg</span>
                                </div>
                                <div className="flex mt-1">
                                    <span className="mx-auto text-neutral-500">
                                        weight
                                    </span>
                                </div>
                            </div>
                            <div className="border-[1px] border-neutral-200 mt-1 mb-3"></div>
                            <div className="flex flex-col items-center justify-end w-1/3">
                                <div className="flex justify-center gap-2 my-auto">
                                    <RulerIcon width={24} height={24} />
                                    <div>{data.height*10} cm</div>
                                </div>
                                <div className="flex mt-1">
                                    <span className="mx-auto text-neutral-500">
                                        height
                                    </span>
                                </div>
                            </div>
                            <div className="border-[1px] border-neutral-200 mt-1 mb-3"></div>
                            <div className="flex flex-col justify-end w-1/3">
                                <div className="flex flex-col my-auto">
                                    {data.abilities.map(ability => {
                                        return (
                                            <span
                                                key={ability.ability.id}
                                                className="mx-auto"
                                            >
                                                {ability.ability.name}
                                            </span>
                                        );
                                    })}
                                </div>
                                <div className="flex mt-1">
                                    <span className="mx-auto text-neutral-500">
                                        abilities
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
