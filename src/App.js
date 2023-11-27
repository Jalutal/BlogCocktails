import logo from './logo.svg';
import './App.css';
import AllCocktails from './pages/AllCocktails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomCocktails from './pages/RandomCocktails';
import IngredientsPage from './pages/IngredientsPage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllCocktails />}/>
        <Route path="/random" element={<RandomCocktails />}/>
        <Route path="/ingredients" element={<IngredientsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
