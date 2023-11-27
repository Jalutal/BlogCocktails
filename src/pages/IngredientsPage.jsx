import { useState, useEffect } from "react";

function IngredientsPage() {
    const [ingredients, setIngredients] = useState(null);

    useEffect(() => {
        (async () => {
            const ingredientsAPIResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
            const ingredientApi = await ingredientsAPIResponse.json();
            setIngredients(ingredientApi.drinks);
        })();
    }, []);
 
    return(
        <div>
        <h3>Liste des ingrédients</h3>
        {ingredients ? (
            <div>
                {ingredients.map((ingredient) => (
                    <article key={ingredient.strIngredient1}>
                        <p>{ingredient.strIngredient1}</p>
                    </article>
                ))}
            </div>
        ) : (
            <p>Ingrédients en préparation</p>
        )}
    </div>
    );
}

export default IngredientsPage;








