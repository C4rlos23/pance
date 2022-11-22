import { NavBarD } from '../share/NavBarD'
import { Link } from 'react-router-dom'
import './InicioSesion.css'

export const InicioSesion = () => {
    return (
        <>
            <NavBarD />
            <div id='container'>
                <div className='cardCentral' id='centrado'>
                    <form action="">
                        <label htmlFor=""> Correo </label> <br />
                        <input type="email" name="" id="" /> <br />
                        <label htmlFor=""> Contraseña </label> <br />
                        <input type="password" name="" id="" /> <br />
                        <Link to="home"><button type="submit"> Iniciar Sesion </button> <br /></Link>
                    </form>
                </div>
            </div>
        </>
    )
}