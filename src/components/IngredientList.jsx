// src/components/IngredientList.jsx
import React from 'react';
import Ingredient from './Ingredient';
import Cheese from '../assets/images/burger/ingredients/cheese.jpg';
import Beef from '../assets/images/burger/ingredients/beef.jpg';
import Nugget from '../assets/images/burger/ingredients/nugget.jpg';
import Mayo from '../assets/images/burger/ingredients/mayo.jpg';
import Ketchup from '../assets/images/burger/ingredients/ketchup.avif';

const ingredients = [
    { name: 'cheese', image: Cheese },
    { name: 'beef', image: Beef },
    { name: 'nugget', image: Nugget },
    { name: 'mayo', image: Mayo },
    { name: 'ketchup', image: Ketchup },
];

const IngredientList = () => {
    return (
        <div className="ingredient-list">
        {ingredients.map((ingredient) => (
            <Ingredient key={ingredient.name} name={ingredient.name} image={ingredient.image} />
        ))}
        </div>
    );
};

export default IngredientList;
