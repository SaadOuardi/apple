import React, { createContext, useState } from 'react';
import Wood from '../assets/images/materials/wood.avif';
import Steel from '../assets/images/materials/steel.jpg';
import Marble from '../assets/images/materials/marble.jpg';

export const MaterialContext = createContext();

export const MaterialProvider = ({ children }) => {
    const [selectedMaterial, setSelectedMaterial] = useState({
        name: 'Wood',
        img: Wood
    });

    return (
        <MaterialContext.Provider value={{ selectedMaterial, setSelectedMaterial }}>
            {children}
        </MaterialContext.Provider>
    );
};