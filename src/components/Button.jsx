export default function Button({title, onClick}) {
    return (
        <div className="flex justify-center mt-10">
            <button
                className="z-10 px-10 py-2 mb-16 text-2xl font-bold border-2 text-neutral-700 rounded-xl hover:bg-gray-300 hover:border-gray-300"
                onClick={onClick}
            >
                {title}
            </button>
        </div>
    );
}
