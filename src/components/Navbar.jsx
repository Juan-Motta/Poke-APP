import SearchIcon from './SearchIcon';
import { useRef } from 'react';
import { usePokemonStore } from '../stores/PokemonStore';
import updateFilter from '../utils.js'


export default function Navbar() {
    const inputRef = useRef(null);

    function onChangeInput(e) {
        e.preventDefault();
        if (e.keyCode != 13) return;
        const input = inputRef.current.value;
        if (isNaN(input)) {
            updateFilter(input, 'name');
        } else {
            updateFilter(input, 'id');
        }
        inputRef.current.value = '';
    }

    function handleClean() {
        const setVariables = usePokemonStore.getState().setVariables;
        usePokemonStore.setState({ pokemons: [] });
        setVariables({ limit: 20, offset: 0 });
    }

    return (
        <>
            <nav className="flex mt-8 mb-8">
                <div className="w-2/3">
                    <h1
                        onClick={handleClean}
                        className="inline text-5xl font-black text-gray-700 cursor-pointer"
                    >
                        Pokedex
                    </h1>
                </div>
                <div className="relative flex items-center justify-end w-1/3 h-100">
                    <input
                        type="text"
                        className="w-full px-3 py-1 pl-10 text-lg border-2 border-none rounded-lg bg-neutral-200"
                        placeholder="Insert a name or id"
                        onKeyUp={onChangeInput}
                        ref={inputRef}
                    />
                    <SearchIcon />
                </div>
            </nav>
            <hr />
        </>
    );
}
