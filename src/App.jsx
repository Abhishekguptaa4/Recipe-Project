import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserPage from "./pages/UserPage";
import ChefPage from "./pages/ChefPage";
import AddRecipePage from "./pages/AddRecipePage";
import MyRecipes from "./pages/MyRecipes";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/chef" element={<ChefPage />} />
      <Route path="/add-recipe" element={<AddRecipePage />} />
      <Route path="/recipes" element={<MyRecipes />} /> 
      
     
    </Routes>
  </Router>
  );
}

export default App;