import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reservas';  // URL del backend

// Función para obtener reservas
export const getReservas = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las reservas:', error);
        throw error;
    }
};

// Función para crear una nueva reserva
export const crearReserva = async (nombre, sillas) => {
    try {
        const response = await axios.post(API_URL, { nombre, sillas });
        return response.data;
    } catch (error) {
        console.error('Error al crear la reserva:', error);
        throw error;
    }
};
