import React from 'react';
import Burger from '../components/Burger';
import IngredientList from '../components/IngredientList';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const BurgerCustomization = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="app">
                <h1>Customize Your Burger</h1>
                <div className="main-section">
                    <IngredientList />
                    <Burger />
                </div>
            </div>
        </DndProvider>
    )
}

export default BurgerCustomization;
