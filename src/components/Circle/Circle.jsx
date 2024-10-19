import React, { useContext, useState } from 'react';
import { CirclePositionContext } from '../../contexts/CirclePositionContext';
import './Circle.scss';

const Circle = () => {
    const { position, setPosition } = useContext(CirclePositionContext);
    const [dragging, setDragging] = useState(false);

    const handleMouseDown = () => {
        setDragging(true);
    };

    const handleMouseMove = (e) => {
        if (dragging) {
        const newX = e.clientX - 50;  // Adjust for circle size
        const newY = e.clientY - 50;  // Adjust for circle size
        setPosition({ x: newX, y: newY });
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    return (
        <div
            className="circle"
            style={{ left: position.x, top: position.y }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
        Drag Me
        </div>
    );
};

export default Circle;
