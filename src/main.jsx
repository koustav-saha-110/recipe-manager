import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Importing the BrowserRouter
import { BrowserRouter } from 'react-router-dom';

// Importing the RecipeContext
import RecipeContext from './context/RecipeContext.jsx';

// Selecting the Root Element
const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.Fragment>
    <RecipeContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecipeContext>
  </React.Fragment>
);
