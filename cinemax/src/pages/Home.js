import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="mt-5">
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Bienvenido al sistema de reservas de CineMax</Card.Title>
                    <Card.Text>
                        Un sistema fácil y rápido para reservar tus sillas en las mejores salas de cine.
                    </Card.Text>
                    <Button variant="primary" href="/reservas">
                        ¡Comienza a Reservar!
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Home;
