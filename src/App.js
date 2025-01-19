import './App.css';
import Home from './Home.js';
import RecipeWrapper from './RecipeWrapper.js';
import Navbar from './Navbar';
import PasswordPrompt from './PasswordPrompt.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const password = process.env.REACT_APP_PASSWORD;
  const [recipes, setRecipes] = useState([]);

  const handleLogin = (enteredPassword, setMessage) => {
    if (enteredPassword === password) {
      setAuthenticated(true);
      localStorage.setItem("authenticated", "true");
      setMessage("");
    } else {
      setMessage("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("authenticated");
  };

  useEffect(() => {
    if (localStorage.getItem("authenticated") === "true") {
      setAuthenticated(true);
    }
  }, []);

  if (!authenticated) {
    return <PasswordPrompt onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home setRecipesInParent={setRecipes} />} />
        <Route
          path="/recipe/:id"
          element={<RecipeWrapper recipes={recipes} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
