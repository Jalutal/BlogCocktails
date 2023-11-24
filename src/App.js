import logo from './logo.svg';
import './App.css';
import AllCocktails from './pages/AllCocktails';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllCocktails />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
