import React, { useContext } from 'react';
import { MaterialContext } from '../../contexts/MaterialContext';
import { CirclePositionContext } from '../../contexts/CirclePositionContext';
import Circle from '../Circle/Circle';
import './PreviewCanvas.scss';

const PreviewCanvas = () => {
    const { selectedMaterial } = useContext(MaterialContext);
    const { position } = useContext(CirclePositionContext);

    return (
        <div className="preview-canvas">
            <h2>Product Preview</h2>
            <div
                className="canvas"
                style={{
                    backgroundImage: `url(${selectedMaterial.img})`,
                }}
            >
                <Circle />
            </div>
        </div>
    );
};

export default PreviewCanvas;