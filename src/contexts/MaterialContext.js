import React, { createContext, useState } from 'react';
import Wood from '../assets/images/materials/wood.avif';

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