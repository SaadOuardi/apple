import React from 'react';
import { MaterialProvider } from '../contexts/MaterialContext';
import { CirclePositionProvider } from '../contexts/CirclePositionContext';
import MaterialSelector from '../components/MaterialSelector/MaterialSelector';
import CoordinatesInput from '../components/CoordinatesInput/CoordinatesInput';
import PreviewCanvas from '../components/PreviewCanvas/PreviewCanvas';

const CustomizationPage = () => {
    return (
        <MaterialProvider>
            <CirclePositionProvider>
                <div className="customization-page">
                    <h1>Customize Your Product</h1>
                    <MaterialSelector />
                    <CoordinatesInput />
                    <PreviewCanvas />
                </div>
            </CirclePositionProvider>
        </MaterialProvider>
    );
};

export default CustomizationPage;