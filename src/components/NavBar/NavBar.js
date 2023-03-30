import MenuCart from "../MenuCart/MenuCart";

const navBar = () => {
    return(
        <div className="menu">
            <h3>La Barra del Chef</h3>
            <div class="navBar">
                <nav className="navBarMenu">
                    <li><a href="#">Barra de Autor</a></li>
                    <li><a href="#">Barra Creativa</a></li>
                    <li><a href="#">Barra Fría</a></li>
                    <li><a href="#">Barra de Postres</a></li>
                </nav>
                <MenuCart/>
            </div>
        </div>
    );
}

export default navBar