import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// Importing the RecipeData Context
import { RecipeData } from "../context/RecipeContext";

function CreateRecipePage() {

    // States
    const navigate = useNavigate();
    const { addRecipe } = useContext(RecipeData);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [howToCook, setHowToCook] = useState("");

    // Handlers
    const submitHandler = (e) => {
        e.preventDefault();
        if (!name || !image || !description || !ingredients || !howToCook) {
            toast.error("Can't create Recipe");
            toast.error("Please fill all the fields");
        } else {
            addRecipe(name, image, description, ingredients.split(","), howToCook);
            navigate("/");
        }
    }

    return (
        <React.Fragment>
            <section className='w-full flex items-center justify-center py-10'>
                <form onSubmit={submitHandler} className="bg-white/90 shadow-2xl rounded-2xl px-8 pt-8 pb-10 flex flex-col gap-5 w-150 border border-blue-100 backdrop-blur">
                    <h2 className="text-2xl font-bold text-blue-600 mb-2 text-center">Create Recipe</h2>
                    <label className="block text-gray-700 text-sm font-semibold">Recipe Name<input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" className="mt-1 shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" placeholder="Enter recipe name" required />
                    </label>
                    <label className="block text-gray-700 text-sm font-semibold"> Recipe Image<input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" className="mt-1 shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" placeholder="Give recipe Image URL" required />
                    </label>
                    <label className="block text-gray-700 text-sm font-semibold">Description<textarea value={description} onChange={(e) => setDescription(e.target.value)} name="description" className="mt-1 shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" placeholder="Description about the Recipe" rows={3} required />
                    </label>
                    <label className="block text-gray-700 text-sm font-semibold">Ingredients<textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} name="ingredients" className="mt-1 shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" placeholder="List ingredients comma seperated" rows={3} required />
                    </label>
                    <label className="block text-gray-700 text-sm font-semibold">How to Cook<textarea value={howToCook} onChange={(e) => setHowToCook(e.target.value)} name="instructions" className="mt-1 shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" placeholder="Describe preparation steps" rows={3} required />
                    </label>
                    <button type="submit" className="bg-gradient-to-r from-blue-500 to-pink-400 hover:from-blue-600 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-300">Create</button>
                </form>
            </section>
        </React.Fragment>
    );
}

export default CreateRecipePage;
