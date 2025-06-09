import React, { useContext } from 'react';

// Importing Components
import RecipeCard from '../components/RecipeCard';

// Importing the RecipeData Context
import { RecipeData } from '../context/RecipeContext';

function HomePage() {

    // States
    const { recipes } = useContext(RecipeData);

    return (
        <React.Fragment>
            <section className="max-w-6xl mx-auto py-10 px-4 flex flex-col gap-10">
                <main className="flex flex-wrap gap-8 justify-center items-start">
                    {
                        recipes.length > 0 ? recipes.map((recipe, i) => (
                            <RecipeCard key={i} recipe={recipe} />
                        )) : <p className='text-gray-400'>no recipes found</p>
                    }

                </main>
            </section>
        </React.Fragment>
    );
}

export default HomePage;
