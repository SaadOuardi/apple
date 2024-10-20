import React from 'react';
import { Header } from '../components/common/Header/Header';
import { MaterialProvider } from '../contexts/MaterialContext';
import { CirclePositionProvider } from '../contexts/CirclePositionContext';
import MaterialSelector from '../components/MaterialSelector/MaterialSelector';
import CoordinatesInput from '../components/CoordinatesInput/CoordinatesInput';
import PreviewCanvas from '../components/PreviewCanvas/PreviewCanvas';

const CustomizationPage = () => {
    return (
        <>
            <Header/>
            <MaterialProvider>
                <CirclePositionProvider>
                    <div className="customization-page flex-start-center">
                        <div className='customization-image'>
                            <h1>Customize Your Product</h1>
                            <PreviewCanvas />
                        </div>
                        <div className='customization-options'>
                            <CoordinatesInput />
                            <MaterialSelector />
                        </div>
                    </div>
                </CirclePositionProvider>
            </MaterialProvider>
        </>
    );
};

export default CustomizationPage;