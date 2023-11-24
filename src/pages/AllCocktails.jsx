import { useState } from "react";

function AllCocktails() {

    const [cocktails, setCocktails] = useState(null);

    if (!cocktails) {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setCocktails(json.drinks);
            });
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