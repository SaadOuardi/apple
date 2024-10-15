import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import './DraggableCircle.scss';

const DraggableCircle = ({ x, y, updatePosition }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'circle',
        item: { x, y },
        end: (item, monitor) => {
        const delta = monitor.getDifferenceFromInitialOffset();
        updatePosition(x + delta.x, y + delta.y); // Update position on drag end
        },
        collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
        ref={drag}
        className="draggable-circle"
        style={{
            left: `${x}px`,
            top: `${y}px`,
            opacity: isDragging ? 0.5 : 1,
        }}
        >
        {/* Circle visualization */}
        </div>
    );
};

export default DraggableCircle;