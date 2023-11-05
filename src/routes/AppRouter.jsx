import {Route, Routes, Navigate} from 'react-router-dom';
import PokemonPage from '../pages/PokemonPage';
import NotFoundPage from '../pages/NotFoundPage';
import PokemonDetailModal from '../components/PokemonDetailModal';

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/pokemon" />} />
            <Route path="/pokemon" element={<PokemonPage />}>
                <Route path=":pokemonId" element={<PokemonDetailModal />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
