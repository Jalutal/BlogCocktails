import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function CocktailsDetailsPage() {
    const {id} = useParams();
    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {
        (async() => {
            const cocktailAPIResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
            const cocktailAPI = await cocktailAPIResponse.json();
            setCocktails(cocktailAPI.drinks[0]);
        })();
    }, []);


    return (
        <>
          <main>
            {cocktails ? (
              <>
                <h2>{cocktails.strDrink}</h2>
                <img src={cocktails.strDrinkThumb} alt={cocktails.strDrink} />
                <p>Categorie : {cocktails.strCategory}</p>
                <p>Instructions : {cocktails.strInstructions}</p>
              </>
            ) : (
              <p>Chargement en cours...</p>
            )}
          </main>
        </>
      );
}

export default CocktailsDetailsPage;