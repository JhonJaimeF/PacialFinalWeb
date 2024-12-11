import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de importar correctamente Router, Routes y Route
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reservas from './pages/Reservas';
import Informes from './pages/Informes';  // Asegúrate de que esta página exista

const App = () => {
    return (
        <Router>  {/* Asegúrate de que Router envuelva todo */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />  {/* Ruta de la página principal */}
                <Route path="/reservas" element={<Reservas />} />  {/* Ruta de reservas */}
                <Route path="/informes" element={<Informes />} />  {/* Ruta de informes */}
            </Routes>
        </Router>
    );
};

export default App;
