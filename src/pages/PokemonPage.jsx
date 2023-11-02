import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PokemonList from '../components/PokemonList';

export default function PokemonPage() {
    return (
        <div className="container mx-auto overflow-hidden">
            <Navbar />
            <div className="flex mt-8">
                <Sidebar />
                <PokemonList />
            </div>
        </div>
    );
}
