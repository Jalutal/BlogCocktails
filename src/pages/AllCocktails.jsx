import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

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
    <main>
      <Header />
      {cocktails ? (
        <>
          {cocktails.map((cocktail) => {
            return (
              <article>
                <h2>{cocktail.strDrink}</h2>  
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />              
                <Link to={`/cocktails/details/${cocktail.idDrink}`}>Tu veux les détails ?</Link>
              </article>
            );
          })}
        </>
      ) : (
        <p>Cocktails en cours de chargement</p>
      )}
    </main>
  );
}

export default CocktailsPage;