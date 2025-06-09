import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

// Importing the RecipeData Context
import { RecipeData } from '../context/RecipeContext';

function ViewRecipePage() {

    // States
    const navigate = useNavigate();
    const { getRecipe, deleteRecipe } = useContext(RecipeData);
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const recipe = getRecipe(id);
        if (recipe) {
            setRecipe(recipe);
        } else {
            toast.error("Recipe Not Found");
        }
    }, []);

    if (!recipe) {
        return (
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
                <p className="text-gray-600">The recipe you are looking for does not exist or could not be loaded.</p>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 rounded-3xl shadow-2xl mt-12 border border-gray-300">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                    <img src={recipe.image} alt={recipe.name} className="w-full md:w-80 h-64 object-cover rounded-2xl shadow-lg border-2 border-indigo-200" />
                    <div className="flex-1">
                        <h2 className="text-4xl font-extrabold mb-2 text-indigo-900 drop-shadow-sm">{recipe.name}</h2>
                        <p className="text-indigo-400 mb-3 text-xs uppercase tracking-wider">
                            <span className="font-semibold">Created At:</span><span> {recipe.createdAt}</span>
                        </p>
                        <p className="mb-6 text-lg text-gray-700 italic">{recipe.description}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center gap-2">
                            <span role="img" aria-label="Ingredients" className="text-2xl">🧂</span> Ingredients
                        </h3>
                        <ul className="list-disc ml-7 text-gray-900">
                            {
                                recipe.ingredients.map((item, idx) => (
                                    <li key={idx} className="pl-1">{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center gap-2">
                            <span role="img" aria-label="How to Cook" className="text-2xl">👩‍🍳</span> How to Cook
                        </h3>
                        <div className="bg-white/70 rounded-xl p-4 shadow-inner text-gray-800 leading-relaxed">
                            {recipe.howtocook}
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-4 mt-8">
                    <Link to={`/edit-recipe/${id}`} className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">Edit</Link>
                    <button className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition" onClick={() => {
                        deleteRecipe(id);
                        navigate("/");
                    }}>Delete</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ViewRecipePage;
