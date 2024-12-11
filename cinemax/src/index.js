import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap aquí
import ReactDOM from 'react-dom/client';  // Asegúrate de importar desde 'react-dom/client'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Usamos `createRoot` aquí
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
