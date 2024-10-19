import React, { useState } from 'react';
import DraggableCircle from '../DraggableCircle/DraggableCircle';
import MaterialSelector from '../MaterialSelector/MaterialSelector';

const ProductCustomization = () => {
    const [coordinates, setCoordinates] = useState({ x: 100, y: 100 });
    const [selectedMaterial, setSelectedMaterial] = useState('wood');

    const handleDrag = (newPosition) => {
        setCoordinates(newPosition);
        console.log('Updated Coordinates: ', newPosition);
    };

    const handleMaterialChange = (material) => {
        setSelectedMaterial(material);
        console.log('Selected Material: ', material);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            <h3>Customize Your Product:</h3>
            <DraggableCircle onDrag={handleDrag} position={coordinates} />
            <MaterialSelector selectedMaterial={selectedMaterial} onMaterialChange={handleMaterialChange} />
        </div>
    );
};

export default ProductCustomization;
