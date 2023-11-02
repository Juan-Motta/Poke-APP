import {Route, Routes, Navigate} from 'react-router-dom';
import PokemonPage from '../pages/PokemonPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/pokemon" />} />
            <Route path="/pokemon" element={<PokemonPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
