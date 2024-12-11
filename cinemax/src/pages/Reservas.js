import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Reservas = () => {
    const [sillas, setSillas] = useState(Array(5).fill(Array(10).fill(false)));  // Inicializa las sillas vacías
    const [nombre, setNombre] = useState('');  // Estado para el nombre del usuario

    // Obtener las reservas existentes del backend
    useEffect(() => {
        axios.get('http://localhost:5000/api/reservas')
            .then(response => {
                // Supongamos que solo hay una reserva para el cine, o el índice de la reserva
                // La idea es obtener las sillas de la última reserva
                const ultimaReserva = response.data[response.data.length - 1];
                if (ultimaReserva && ultimaReserva.sillas) {
                    setSillas(ultimaReserva.sillas);
                }
            })
            .catch(error => {
                console.error('Error al obtener las reservas:', error);
            });
    }, []);

    // Función para manejar el clic en las sillas
    const manejarClick = (fila, columna) => {
        const nuevasSillas = sillas.map((f, i) =>
            f.map((s, j) => (i === fila && j === columna ? !s : s))  // Cambia el estado de la silla seleccionada
        );
        setSillas(nuevasSillas);
    };

    // Función para crear la nueva reserva
    const crearReserva = () => {
        axios.post('http://localhost:5000/api/reservas', {
            nombre: nombre,
            sillas: sillas
        })
            .then(response => {
                console.log('Reserva creada:', response.data);
                setSillas(Array(5).fill(Array(10).fill(false)));  // Resetear las sillas si se quiere
            })
            .catch(error => {
                console.error('Error al crear la reserva:', error);
            });
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center">Selecciona tus Sillas</h2>

            {/* Input para el nombre del usuario */}
            <input
                type="text"
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="form-control mb-4"
            />

            <div className="mt-4">
                {/* Mostrar las sillas y permitir marcar las ocupadas */}
                {sillas.map((fila, i) => (
                    <Row key={i} className="mb-2 justify-content-center">
                        {fila.map((ocupada, j) => (
                            <Col key={j} sm="1" className="mb-2">
                                <Card>
                                    <Button
                                        variant={ocupada ? 'danger' : 'success'}
                                        style={{ width: '50px', height: '50px' }}
                                        onClick={() => manejarClick(i, j)}  // Llama a la función para cambiar el estado
                                    >
                                        {ocupada ? 'X' : 'O'}
                                    </Button>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ))}
            </div>

            {/* Botón para confirmar la reserva */}
            <Button onClick={crearReserva} variant="primary" className="mt-3">
                Confirmar Reserva
            </Button>
        </Container>
    );
};

export default Reservas;
