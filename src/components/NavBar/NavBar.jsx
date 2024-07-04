import CartdWidget from "./CartWidget"
import "./navbar.css"


const NavBar = () => {

    return(
        <nav className=" navbar">
            <div className= "barnd">
                INFOTAP
            </div>
            <ul>
                <li>Inicio</li>
                <li>Camaras</li>
                <li>Dvr</li>
            </ul>

            <CartdWidget />


        </nav>
    )
}

export default NavBar