import './App.css';
import Home from './Home.js';
import RecipeWrapper from './RecipeWrapper.js';
import Navbar from './Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
