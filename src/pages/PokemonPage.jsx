import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PokemonList from '../components/PokemonList';
import {Outlet} from 'react-router-dom';

export default function PokemonPage() {
    return (
        <>
            <div className="container mx-auto overflow-hidden">
                <Navbar />
                <div className="flex mt-8">
                    <Sidebar />
                    <PokemonList />
                </div>
            </div>
            <Outlet />
        </>
    );
}
