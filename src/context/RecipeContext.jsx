import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from "uuid";

// Creating the RecipeData Context
export const RecipeData = createContext();

function RecipeContext(props) {

    // States
    const [recipes, setRecipes] = useState([]);

    // Handlers
    const getRecipes = () => {
        const tmp = localStorage.getItem("recipe_data");

        if (!tmp) {
            localStorage.setItem("recipe_data", JSON.stringify([]));
            setRecipes([]);
        } else {
            let storageData = JSON.parse(tmp);
            setRecipes(storageData);
        }
    }

    const addRecipe = (name, image, description, ingredients, howtocook) => {
        const id = uuidv4();
        const newRecipe = {
            id: id,
            name: name,
            image: image,
            description: description,
            ingredients: ingredients,
            howtocook: howtocook,
            createdAt: new Date().toLocaleDateString()
        };

        let tmp = localStorage.getItem("recipe_data");
        let storageData;
        if (!tmp) {
            storageData = [];
        } else {
            storageData = JSON.parse(tmp);
        }

        storageData.push(newRecipe);
        localStorage.setItem("recipe_data", JSON.stringify(storageData));

        setRecipes((prev) => {
            return [...prev, newRecipe];
        });

        toast.success("Recipe Added");
    }

    const getRecipe = (id) => {
        const tmp = localStorage.getItem("recipe_data");

        if (tmp) {
            let storageData = JSON.parse(tmp);
            let recipe = storageData.find(function (r) {
                if (r.id == id) return r
            });

            if (recipe) return recipe;
            else return null;
        } else {
            localStorage.setItem("recipe_data", JSON.stringify([]));
            return null;
        }
    }

    const editRecipe = (id, name, image, description, ingredients, howtocook) => {
        let storageData = JSON.parse(localStorage.getItem("recipe_data"));
        let updatedData = storageData.map((r) => {
            if (r.id == id) {
                r.name = name;
                r.image = image;
                r.description = description;
                r.ingredients = ingredients;
                r.howtocook = howtocook;
            }

            return r;
        });

        localStorage.setItem("recipe_data", JSON.stringify(updatedData));

        setRecipes((prev) => {
            return prev.map((r) => {
                if (r.id == id) {
                    r.name = name;
                    r.image = image;
                    r.description = description;
                    r.ingredients = ingredients;
                    r.howtocook = howtocook;
                }

                return r;
            });
        });

        toast.success("Recipe Edited");
    }

    const deleteRecipe = (id) => {
        let storageData = JSON.parse(localStorage.getItem("recipe_data"));
        let updatedData = storageData.filter((r) => r.id != id);
        localStorage.setItem("recipe_data", JSON.stringify(updatedData));

        setRecipes(prev => {
            return prev.filter((r) => r.id != id);
        });

        toast.success("Recipe Deleted");
    }

    const clearAllRecipes = () => {
        localStorage.setItem("recipe_data", JSON.stringify([]));
        setRecipes([]);
    }

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <React.Fragment>
            <RecipeData.Provider value={{ recipes, addRecipe, getRecipe, editRecipe, deleteRecipe, clearAllRecipes }}>
                {props.children}
            </RecipeData.Provider>
        </React.Fragment>
    );
}

export default RecipeContext;
