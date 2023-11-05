export default function ({title, colorClass, handleClick}) {
    return (
        <>
            <button
                onClick={() => handleClick(title, colorClass)}
                className={` ${colorClass} py-1 select-none cursor-pointer rounded-md text-white w-full font-bold text-shadow-black `}
            >
                {title}
            </button>
        </>
    );
}
