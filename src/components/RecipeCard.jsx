import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
    return (
        <React.Fragment>
            <div className="max-w-xs w-full bg-white rounded-xl shadow-lg p-4 flex flex-col border border-gray-300 gap-3">
                <img src={recipe.image} alt="Recipe" className="w-full h-40 object-cover object-center rounded-md" />
                <h2 className="text-lg font-semibold">{recipe.name}</h2>
                <p className="text-gray-600 text-sm">{recipe.description.length > 115 ? recipe.description.substring(0, 115) + "..." : recipe.description}</p>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">{recipe.createdAt}</span>
                    <Link to={`/view-recipe/${recipe.id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">View Recipe</Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RecipeCard;
