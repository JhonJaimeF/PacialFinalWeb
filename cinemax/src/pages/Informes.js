import React, { useState, useEffect } from 'react';
import { getReservas } from '../services/api';  // Importa la función getReservas

const Informes = () => {
    const [informes, setInformes] = useState([]);

    useEffect(() => {
        getReservas()
            .then(data => {
                setInformes(data);  // Aquí actualizas los informes con las reservas obtenidas
            })
            .catch(error => {
                console.error('Error al obtener los informes:', error);
            });
    }, []);

    return (
        <div>
            <h2>Informes de Reservas</h2>
            <ul>
                {informes.map((reserva, index) => (
                    <li key={index}>{reserva.nombre} - {new Date(reserva.fecha).toLocaleString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default Informes;
