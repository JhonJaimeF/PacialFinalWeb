import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Informes = () => {
    const [informes, setInformes] = useState({});

    useEffect(() => {
        api.getInformes().then(data => setInformes(data));
    }, []);

    return (
        <div>
            <h2>Informes de taquilla</h2>
            <p>Boletas vendidas: {informes.boletasVendidas}</p>
            <p>Total ventas: {informes.totalVentas}</p>
            <p>Porcentaje de ocupación: {informes.porcentajeOcupacion}%</p>
        </div>
    );
};

export default Informes;
