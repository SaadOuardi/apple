import React, { useContext } from 'react';
import { MaterialContext } from '../../contexts/MaterialContext';
import Wood from '../../assets/images/materials/wood.avif';
import Steel from '../../assets/images/materials/steel.jpg';
import Marble from '../../assets/images/materials/marble.jpg';
import './MaterialSelector.scss';

const materials = [
    { id: 1, name: 'Wood', img: Wood },
    { id: 2, name: 'Steel', img: Steel },
    { id: 3, name: 'Marble', img: Marble },
];

const MaterialSelector = () => {
    const { selectedMaterial, setSelectedMaterial } = useContext(MaterialContext);

    return (
        <div className="material-selector flex-center-center flex-column">
            <h1>Meterial Selection</h1>
            {materials.map((material) => (
                <div
                    key={material.id}
                    className={`material-item ${selectedMaterial.name === material.name ? 'selected' : ''}`}
                    onClick={() => setSelectedMaterial(material)}
                >
                    <img src={material.img} alt={material.name} />
                    <span>{material.name}</span>
                </div>
            ))}
        </div>
    );
};

export default MaterialSelector;