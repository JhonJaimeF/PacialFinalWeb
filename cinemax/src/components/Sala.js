import React from 'react';
import Silla from './Silla';

const Sala = ({ sillas, onSillaClick }) => {
    return (
        <div>
            {sillas.map((fila, i) => (
                <div key={i} style={{ display: 'flex' }}>
                    {fila.map((silla, j) => (
                        <Silla
                            key={j}
                            ocupada={silla}
                            onClick={() => onSillaClick(i, j)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Sala;
