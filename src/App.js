import logo from './logo.svg';
import './App.css';
import AllCocktails from './pages/AllCocktails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomCocktails from './pages/RandomCocktails';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllCocktails />}/>
        <Route path="/random" element={<RandomCocktails />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
