import React, { useContext } from 'react';
import { CirclePositionContext } from '../../contexts/CirclePositionContext';
import { MaterialContext } from '../../contexts/MaterialContext';
import './CoordinatesInput.scss';

const CoordinatesInput = () => {
    const { position, setPosition } = useContext(CirclePositionContext);
    const { selectedMaterial } = useContext(MaterialContext); // Access the selected material

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPosition((prev) => ({
        ...prev,
        [name]: parseInt(value, 10) || 0,
        }));
    };

    const handleLogData = () => {
        console.log(`X Coordinate (pixels): ${position.x}px, Y Coordinate (pixels): ${position.y}px`);
        console.log(`Chosen Material: ${selectedMaterial.name}`);
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
            <button onClick={handleLogData} className="log-button">
                Log Coordinates
            </button>
        </div>
    );
};

export default CoordinatesInput;