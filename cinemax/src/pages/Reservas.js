import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Reservas = () => {
    const [sillas, setSillas] = useState(Array(5).fill(Array(10).fill(false)));

    const manejarClick = (fila, columna) => {
        const nuevasSillas = sillas.map((f, i) =>
            f.map((s, j) => (i === fila && j === columna ? !s : s))
        );
        setSillas(nuevasSillas);
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center">Selecciona tus Sillas</h2>
            <div className="mt-4">
                {sillas.map((fila, i) => (
                    <Row key={i} className="mb-2 justify-content-center">
                        {fila.map((ocupada, j) => (
                            <Col key={j} sm="1" className="mb-2">
                                <Card>
                                    <Button
                                        variant={ocupada ? 'danger' : 'success'}
                                        style={{ width: '50px', height: '50px' }}
                                        onClick={() => manejarClick(i, j)}
                                    >
                                        {ocupada ? 'X' : 'O'}
                                    </Button>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ))}
            </div>
        </Container>
    );
};

export default Reservas;
