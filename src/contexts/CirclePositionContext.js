import React, { createContext, useState } from 'react';

export const CirclePositionContext = createContext();

export const CirclePositionProvider = ({ children }) => {
    const [position, setPosition] = useState({ x: 200, y: 200 });

    return (
        <CirclePositionContext.Provider value={{ position, setPosition }}>
            {children}
        </CirclePositionContext.Provider>
    );
};