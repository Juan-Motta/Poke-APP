import { useEffect, useState } from 'react';
import { usePokemonStore } from '../stores/PokemonStore';
import FilterButton from './FilterButton';

export default function Filter({ options, title }) {

    const optionsFilter = Object.entries(options).map(([key, value]) => {
        return {
            title: value.title,
            colorClass: value.colorClass,
        }
    })

    const [filterList, setFilterList] = useState([])
    const [filterOptions, setFilterOptions] = useState(optionsFilter)

    const selectedFilter = (title, colorClass) => {
        const newFilterList = [...filterList, { title, colorClass }];
        setFilterList(newFilterList);
        setFilterOptions(filterOptions.filter((option) => option.title !== title));
        updateFilter(newFilterList);
    }

    const deleteFilter = (title, colorClass) => {
        const newFilterList = filterList.filter((option) => option.title !== title);
        setFilterList(newFilterList);

        const newOption = { title, colorClass };
        const newFilterOptions = [...filterOptions, newOption];

        newFilterOptions.sort((a, b) => a.title.localeCompare(b.title));

        setFilterOptions(newFilterOptions);
        updateFilter(newFilterList);
    }
    function updateFilter(filterList) {
        let arraySelectedTypes = filterList.map((item) => item.title);
        const setVariables = usePokemonStore.getState().setVariables;
        usePokemonStore.setState({ pokemons: [] });
        if (title === 'Color') setVariables({ where: { pokemon_v2_pokemonspecy: { pokemon_v2_pokemoncolor: { name: { _in: arraySelectedTypes } } } } })
        if (title === 'Type') setVariables({ where: { pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _in: arraySelectedTypes } } } } });
    }

    return (
        <div className="mb-2">
            <h2 className="mb-2 text-xl font-bold text-white-700">{title}</h2>
            <hr />
            <h2 className="mb-2 text-base font-bold text-white-700">Selected</h2>
            {filterList.length === 0 &&
                <>
                    <p className="mt-2 text-gray-500">No filter selected</p>
                </>
            }
            <ul className="flex flex-wrap mt-2">
                {filterList.length > 0 ?
                    Object.entries(filterList).map(([key, value]) => {
                        return (
                            <li
                                key={key}
                                className="text-xs my-1 mr-2.5"
                                style={{ width: 'calc(50% - 10px)' }}
                            >
                                <FilterButton
                                    title={value.title}
                                    colorClass={value.colorClass}
                                    handleClick={deleteFilter}
                                />
                            </li>
                        );
                    }) : null
                }
            </ul>
            <  hr className='mt-2' />
            <ul className="flex flex-wrap mt-2">
                {Object.entries(filterOptions).map(([key, value]) => {
                    return (
                        <li
                            key={key}
                            className="text-xs my-1 mr-2.5"
                            style={{ width: 'calc(50% - 10px)' }}
                        >
                            <FilterButton
                                title={value.title}
                                colorClass={value.colorClass}
                                handleClick={selectedFilter}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
