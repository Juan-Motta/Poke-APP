export default function WeightIcon({width = 64, height = 64}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 24 24"
            stroke="#292D32"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
        >
            <path d="M10 22h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9v6c0 5 2 7 7 7z"></path>
            <path d="M17.25 8.29a7.905 7.905 0 00-10.5 0l2.18 3.5a4.613 4.613 0 016.14 0l2.18-3.5z"></path>
        </svg>
    );
}
