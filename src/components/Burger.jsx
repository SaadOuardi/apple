
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import EmptyBurger from '../assets/images/burger/burgers/empty-burger.jpg';


const Burger = () => {
    const [ingredients, setIngredients] = useState([]);

    const [{ isOver }, drop] = useDrop({
        accept: 'ingredient',
        drop: (item, monitor) => {
        const delta = monitor.getSourceClientOffset();
        console.log(`${item.name} added at X: ${delta.x}, Y: ${delta.y}`);
        setIngredients((prev) => [...prev, item]);
        },
        collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div className="burger" ref={drop}>
            <img src={EmptyBurger} alt="Empty Burger" />
            <div className="ingredients-layer">
                {ingredients.map((ingredient, index) => (
                <img
                    key={index}
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="ingredient-overlay"
                />
                ))}
            </div>
            </div>
    );
};

export default Burger;

