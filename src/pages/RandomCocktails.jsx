import { useState } from "react"
import { useEffect } from "react";
import { Link } from "react-router-dom";


function RandomCocktailPage(){

    const [randomCocktail, setRandomCocktail] = useState(null)
    // on met le useState pour garder en mémoire la modification.
    // un if pour lancer le fetch qui va récupérer les infos, transformer en json puis lisible javascript
    // setRandomCocktails pour modifier la variable randomCocktails (car on est sur un UseState) et recharger le composant.
    // Partie JSX, on crée la partie "avant la requête" et "après la requête".

    // UseEffect sert à faire fonctionner le composant une seule fois via le tableau vide sur la fin [].
    // On encadre le async par le UseEffect pour que ce composant ne soit lancé qu'une seule fois.
    useEffect(() => {
        (async () => {
          const cocktailRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
          const cocktailJs = await cocktailRandomResponse.json();
    
          setRandomCocktail(cocktailJs.drinks[0]);
        })();
      }, []);

    return(
        <>
            {randomCocktail !== null ? (
                <main>
                    <p>Là, ca va donner. Regarde donc ça :</p>
                    <h3>{randomCocktail.strDrink}</h3>
                    <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
                    <p>{randomCocktail.strInstructions}</p>
                    <p>ouais en anglais. T'as qu'à apprendre.</p>
                    <Link to={`/cocktails/details/${randomCocktail.idDrink}`}>Matte les détails ici gros.</Link>
                </main>
            ):(
                <main>
                    <p>Bouge pas, j'arrive</p>
                </main>
            )}
        </>
    )
}

export default RandomCocktailPage