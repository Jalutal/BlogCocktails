import { Link } from "react-router-dom";

function CocktailsCard({cocktailDisplay}) {
    return (
        <article>
                <h2>{cocktailDisplay.strDrink}</h2>  
                <img src={cocktailDisplay.strDrinkThumb} alt={cocktailDisplay.strDrink} />              
                <Link to={`/cocktails/details/${cocktailDisplay.idDrink}`}>Tu veux les détails ?</Link>
              </article>
    )
}

export default CocktailsCard;