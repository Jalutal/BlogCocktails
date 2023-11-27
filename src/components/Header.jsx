import { Link } from "react-router-dom";


function Header() {

    return(
        <main className="header">
        <ul>
            <li className="li"><Link to="/">COUCOU</Link></li>
            <li className="li"><Link to="/">C'EST ICI POUR LES COCKTAILS ?</Link></li>
            <li className="li"><Link to="/ingredients">TU LES VEUX TOUS LES INGREDIENTS ?</Link></li>
            <li className="li"><Link to="/random">TU VEUX DU RANDOM PEON COMME TOI ?</Link></li>
        </ul>
        </main>
    )
    }
export default Header;