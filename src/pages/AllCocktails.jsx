import { useState } from "react";


// Pour la fonction anonyme avec async : la fonction va exécuter le même code que le précédent mais sans les .then (on en avait 2, on peut en avoir
// beaucoup plus). De plus la lecture est plus claire et le code simplifié.
// On se sert d'une fonction anonyme qui s'auto-invoque : Elle reste anonyme car aucun nom et s'invoque avec les () de la fin.
// On aurait pu l'appeler mais préciser du coup async, ce qui est tiré par les cheveux que je n'ai plus.


function AllCocktails() {

    const [cocktails, setCocktails] = useState(null);

    if (!cocktails) {        
        (async () => {
            const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
            const cocktailsInJs = await cocktailsResponse.json();
            setCocktails(cocktailsInJs.drinks);

        })();
    }
    return (
        <main>
            {cocktails ? (
                <>
                    <article>Cocktails frais et prêts, on va encore rentrer à 3 grammes YOLO PTDR. CHECK LA LISTE :</article>
                    {cocktails.map((cocktail) => (
                        <div key={cocktail.idDrink}>                            
                            <h2>{cocktail.strDrink}</h2>
                            <img src={cocktail.strDrinkThumb} />
                        </div>
                    ))}
                </>
            ) : null}
        </main>
    );
}

export default AllCocktails;