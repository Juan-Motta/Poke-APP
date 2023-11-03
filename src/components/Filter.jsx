import { useState } from 'react';
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
        setFilterOptions(filterOptions.filter((option) => option.title !== title))
        setFilterList([...filterList, { title, colorClass }])
    }

    const deleteFilter = (title, colorClass) => {
        setFilterList(filterList.filter((option) => option.title !== title))

        const newOption = { title, colorClass };
        const newFilterOptions = [...filterOptions, newOption];

        newFilterOptions.sort((a, b) => a.title.localeCompare(b.title));

        setFilterOptions(newFilterOptions);
    }

    return (
        <div className="mb-2">
            <h2 className="mb-2 text-xl font-bold text-gray-700">{title}</h2>
            <hr />
            <h2 className="mb-2 text-base font-bold text-gray-700">Selected</h2>
            {filterList.length === 0 &&
                <>
                    <p className="mt-2 text-gray-500">No filter selected</p>
                </>
            }
            {filterList.length > 0 ?
                Object.entries(filterList).map(([key, value]) => {
                    return (
                        <div key={key} className="my-2 mr-2.5">
                            <FilterButton
                                title={value.title}
                                colorClass={value.colorClass}
                                handleClick={deleteFilter}
                            />
                        </div>
                    );
                }) : null
            }
            <ul className="flex flex-wrap mt-2">
                {Object.entries(filterOptions).map(([key, value]) => {
                    return (
                        <li
                            key={key}
                            className="my-2 mr-2.5"
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
