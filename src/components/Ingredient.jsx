// src/components/Ingredient.jsx
import React from 'react';
import { useDrag } from 'react-dnd';

const Ingredient = ({ name, image }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'ingredient',
        item: { name, image }, // Pass both the name and the image when dragging
        collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div className="ingredient" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <img src={image} alt={name} />
        <p>{name}</p>
        </div>
    );
};

export default Ingredient;
