import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CocktailsCard from "../components/CocktailsCard";

function CocktailsPage() {
  const [cocktails, setCocktails] = useState(null);

  if (!cocktails) {
    // fonction anonyme asynchrone (elle pas de nom)
    // qui s'autoinvoque
    // cela permet d'effectuer des opérations asynchrones (fetch etc)
    // sans devoir créer une vraie fonction asynchrone
    // (qu'on devrait appeler avec un await)
    (async () => {
      const coktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
      const cocktailsInJs = await coktailsResponse.json();
      setCocktails(cocktailsInJs.drinks);
    })();
  }

  return (
    <main className="fond">
      <Header />
      {cocktails ? (
        <>
          {cocktails.map((cocktail) => {
            return <CocktailsCard cocktailDisplay={cocktail} />
          })}
        </>
      ) : (
        <p>Cocktails en cours de chargement</p>
      )}
    </main>
  );
}

export default CocktailsPage;