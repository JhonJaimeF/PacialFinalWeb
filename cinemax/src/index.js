import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambia esto
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


// Utiliza `createRoot` en lugar de `render`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
