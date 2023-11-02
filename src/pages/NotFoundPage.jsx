import PokeballImage from '../components/PokeballImage';
import {Link} from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="container flex flex-col justify-center w-full h-screen mx-auto align-middle">
            <p className="text-5xl font-bold tracking-widest text-center text-rose-500">
                SORRY
            </p>
            <div className="flex justify-center gap-5">
                <span className="text-[15rem] font-bold text-gray-700">4</span>
                <div className="w-[12rem] flex items-center">
                    <PokeballImage />
                </div>
                <span className="text-[15rem] font-bold text-gray-700">4</span>
            </div>
            <h1 className="text-5xl font-bold tracking-wide text-center text-gray-700">
                Pokemon not found
            </h1>
            <div className="flex justify-center mt-10">
                <Link
                    className="px-10 py-2 text-3xl font-bold text-gray-700 border-2 rounded-xl hover:bg-gray-300 hover:border-gray-300"
                    to="/"
                >
                    BACK HOME
                </Link>
            </div>
        </div>
    );
}
