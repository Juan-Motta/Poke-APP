import FilterButton from './FilterButton';

export default function Filter({options, title}) {
    return (
        <div className="mb-2">
            <h2 className="mb-2 text-xl font-bold text-gray-700">{title}</h2>
            <hr />
            <ul className="flex flex-wrap mt-2">
                {Object.entries(options).map(([key, value]) => {
                    return (
                        <li
                            key={key}
                            className="my-2 mr-2.5"
                            style={{width: 'calc(50% - 10px)'}}
                        >
                            <FilterButton
                                title={value.title}
                                colorClass={value.colorClass}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
