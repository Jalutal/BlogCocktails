import { Link } from "react-router-dom";

function CocktailCard({ cocktailToDisplay }) {

    // Déclaration de la fonction qui va gérer la suppression du cocktail en bdd.
    //Obligatoire de mettre event en paramètre, on lui en passe donc un second.
  const handleDeleteCocktail = async (event, id) => {

    // On fait un fetch mais avec une methode DELETE pour effacer ce qui est pointé dans la base (l'ID).
    await fetch("https://www.thecocktaildb.com/api/json/v1/1/fake-delete.php?i=" + id, {
      method: "DELETE",
    });
  };

  return (
    <article className="cocktail-card">
      <h2>{cocktailToDisplay.strDrink}</h2>
      <img className="cocktail-card-img" src={cocktailToDisplay.strDrinkThumb} alt={cocktailToDisplay.strDrink} />
      <Link to={`/cocktails/details/${cocktailToDisplay.idDrink}`}>Voir le détail du cocktail</Link>

      {/*
        On crée le HandleDeleteCocktail sur le bouton.
        On ajoute le event, rapport au fait qu'un event listener prend à chaque fois un event (c'est un peu loin mais j'ai l'idée).
        On fait la fonction fléchée pour basculer l'id => cocktailToDisplay
        Et là, si le code est bon (donc pas sur cet exemple), normalement ça fait des chocapics.
       */}
       
      <button
        onClick={(event) => {
          handleDeleteCocktail(event, cocktailToDisplay.idDrink);
        }}
      >
        Supprimer le cocktail
      </button>
    </article>
  );
}

export default CocktailCard;
