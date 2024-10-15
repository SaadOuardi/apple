import React, { useState } from 'react';

const InputFields = ({ x, y, setX, setY }) => {
    return (
        <div className="input-fields">
            <label>
                X: <input value={x} onChange={(e) => setX(Number(e.target.value))} />
            </label>
            <label>
                Y: <input value={y} onChange={(e) => setY(Number(e.target.value))} />
            </label>
        </div>
    );
};

export default InputFields;