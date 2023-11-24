import { useState } from "react"

function RandomCocktailPage(){

    const [randomCocktail, setRandomCocktail] = useState(null)
    // on met le useState pour garder en mémoire la modification.
    // un if pour lancer le fetch qui va récupérer les infos, transformer en json puis lisible javascript
    // setRandomCocktails pour modifier la variable randomCocktails (car on est sur un UseState)
    // Partie JSX, on crée la partie "avant la requête" et "après la requête".
    if(randomCocktail === null){
        (async()=>{
            const cocktailRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            const cocktailRandomInJs = await cocktailRandomResponse.json()
            console.log(cocktailRandomInJs);
            setRandomCocktail(cocktailRandomInJs.drinks)
        })()
    }
    console.log(randomCocktail);

    return(
        <>
            {randomCocktail? (
                <main>
                    <p>Là, ca va donner. Regarde donc ça :</p>
                    <h3>{randomCocktail[0].strDrink}</h3>
                    <img src={randomCocktail[0].strDrinkThumb} alt={randomCocktail[0].strDrink} />
                    <p>{randomCocktail[0].strInstructions}</p>
                    <p>ouais en anglais. T'as qu'à apprendre.</p>
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