// PreviewCanvas.jsx
import React, { useContext, useEffect, useRef, useState } from 'react';
import { CirclePositionContext } from '../../contexts/CirclePositionContext';
import { MaterialContext } from '../../contexts/MaterialContext';
import './PreviewCanvas.scss';

const PreviewCanvas = () => {
    const { position, setPosition } = useContext(CirclePositionContext);
    const { selectedMaterial } = useContext(MaterialContext);
    const [dragging, setDragging] = useState(false);
    const previewRef = useRef(null);

    const handleMouseDown = () => {
        setDragging(true);
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            const previewBox = previewRef.current.getBoundingClientRect();
            const circleSize = 80;

            const newX = e.clientX - previewBox.left - circleSize / 2;
            const newY = e.clientY - previewBox.top - circleSize / 2;

            const constrainedX = Math.max(0, Math.min(previewBox.width - circleSize, newX));
            const constrainedY = Math.max(0, Math.min(previewBox.height - circleSize, newY));

            setPosition({ x: constrainedX, y: constrainedY });
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    useEffect(() => {
        const handleDocumentMouseUp = () => setDragging(false);
        document.addEventListener('mouseup', handleDocumentMouseUp);

        return () => {
            document.removeEventListener('mouseup', handleDocumentMouseUp);
        };
    }, []);

    return (
        <div
            className="preview-canvas"
            ref={previewRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div className="material-preview" style={{ backgroundImage: `url(${selectedMaterial.img})` }}>
                <div
                    className="draggable-circle"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                    }}
                    onMouseDown={handleMouseDown}
                >
                    Drag Me
                </div>
            </div>
        </div>
    );
};

export default PreviewCanvas;
