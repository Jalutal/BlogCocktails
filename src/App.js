import logo from './logo.svg';
import './App.css';
import AllCocktails from './pages/AllCocktails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomCocktails from './pages/RandomCocktails';
import IngredientsPage from './pages/IngredientsPage';
import CocktailsDetailsPage from './pages/CocktailsDetailsPage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllCocktails />}/>
        <Route path="/random" element={<RandomCocktails />}/>
        <Route path="/ingredients" element={<IngredientsPage />} />
        <Route path="/cocktails/details/:id" element={<CocktailsDetailsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
