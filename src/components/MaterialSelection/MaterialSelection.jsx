import React, { useState } from 'react';

const materials = ['Wood', 'Metal', 'Plastic', 'Glass', 'Fabric'];

const MaterialSelection = ({ setMaterial }) => {
    const [selectedMaterial, setSelectedMaterial] = useState('');

    return (
        <div className="material-selection">
            <h3>Select Material</h3>
            <ul>
                {materials.map((material) => (
                <li
                    key={material}
                    onClick={() => {
                    setSelectedMaterial(material);
                    setMaterial(material); // Update parent component
                    }}
                    className={selectedMaterial === material ? 'selected' : ''}
                >
                    {material}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default MaterialSelection;