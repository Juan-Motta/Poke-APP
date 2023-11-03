export default function ({ title, colorClass, handleClick }) {
    return (
        <>
            <button
                onClick={() => handleClick(title, colorClass)}
                className={` ${colorClass} py-1 select-none cursor-pointer rounded-lg border-2 text-gray-500 border-none transition-colors duration-200 ease-in-out inline-block w-full text-center font-bold`}
            >
                {title}
            </button>
        </>
    );
}
