import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Importing Components and Routes
import NavBar from './components/NavBar';
import HomePage from './routes/HomePage';
import CreateRecipePage from './routes/CreateRecipePage';
import NotFoundPage from './routes/NotFoundPage';
import ViewRecipePage from './routes/ViewRecipePage';
import EditRecipePage from './routes/EditRecipePage';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';

function App() {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-100 py-8">
        <Toaster position='top-right' />
        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create-recipe' element={<CreateRecipePage />} />
          <Route path='/view-recipe/:id' element={<ViewRecipePage />} />
          <Route path='/edit-recipe/:id' element={<EditRecipePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
