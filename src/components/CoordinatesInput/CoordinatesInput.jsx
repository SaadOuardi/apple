import React, { useContext } from 'react';
import { CirclePositionContext } from '../../contexts/CirclePositionContext';
import './CoordinatesInput.scss';

const CoordinatesInput = () => {
    const { position, setPosition } = useContext(CirclePositionContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPosition((prev) => ({
        ...prev,
        [name]: parseInt(value, 10) || 0,
        }));
    };

    return (
        <div className="coordinates-input">
        <label>
            X Coordinate:
            <input
                type="number"
                name="x"
                value={position.x}
                onChange={handleInputChange}
            />
        </label>
        <label>
            Y Coordinate:
            <input
                type="number"
                name="y"
                value={position.y}
                onChange={handleInputChange}
            />
        </label>
        </div>
    );
};

export default CoordinatesInput;