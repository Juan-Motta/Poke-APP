import PokeballIcon from './PokeballIcon';
import POKEMON_COLORS from '../constants/pokemonColors';
import misteriousPokemon from '../assets/misterious-pokemon.webp';

export default function PokemonCard({
    pokemonId,
    pokemonName,
    pokemonTypes,
    pokemonColor,
}) {
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

    return (
        <div
            className={`relative flex flex-col mb-5 border-2 border-none rounded-xl ${
                POKEMON_COLORS[pokemonColor.color.name.toUpperCase()].colorClass
            }`}
        >
            <div className="z-10 cursor-pointer">
                <div className="z-10 flex flex-row justify-between px-3 pt-3">
                    <h2 className="text-lg font-bold text-white">
                        {pokemonName}
                    </h2>
                    <span className="text-lg font-bold text-white">
                        #{String(pokemonId).padStart(3, '0')}
                    </span>
                </div>
                <div className="z-10 flex flex-row justify-between px-3 my-3">
                    <div className="flex flex-col w-1/2 pt-4 pr-4 h-100">
                        {pokemonTypes.map(({type}) => (
                            <span
                                key={type.name}
                                className="px-2 py-1 mb-1 text-white rounded-md bg-transparent-25"
                            >
                                {type.name}
                            </span>
                        ))}
                    </div>
                    <div className="w-1/2 ">
                        <img src={formatUrl()} alt={pokemonName} />
                    </div>
                </div>
            </div>
            <div className="">
                <PokeballIcon />
            </div>
        </div>
    );
}
