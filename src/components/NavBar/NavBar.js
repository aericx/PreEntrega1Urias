import MenuCart from "../MenuCart/MenuCart";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="menu">
            <Link to="/">
                <h3>La Barra del Chef</h3>
            </Link>
            <div className="NavBar">
                <div className="navBarMenu">
                    <NavLink to={`/category/pasteles`} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Pasteles</NavLink>
                    <NavLink to={`/category/panabox`} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Panabox</NavLink>
                    <NavLink to={`/category/comidas`} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Comidas</NavLink>
                </div>
                <MenuCart/>
            </div>
        </nav>
    )
}

export default NavBar