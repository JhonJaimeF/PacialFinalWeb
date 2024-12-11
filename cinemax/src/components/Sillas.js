import React from 'react';

const Silla = ({ ocupada, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                margin: '5px',
                width: '30px',
                height: '30px',
                backgroundColor: ocupada ? 'red' : 'green',
                border: '1px solid black',
                borderRadius: '5px',
            }}
        />
    );
};

export default Silla;
