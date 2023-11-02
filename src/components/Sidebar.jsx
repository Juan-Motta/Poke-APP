import Filter from './Filter';
import POKEMON_TYPES from '../constants/pokemonTypes';
import POKEMON_COLORS from '../constants/pokemonColors';

export default function Sidebar() {
    return (
        <aside className="w-2/12">
            <Filter options={POKEMON_TYPES} title="Type" />
            <Filter options={POKEMON_COLORS} title="Color" />
        </aside>
    );
}
