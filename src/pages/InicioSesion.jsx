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
                        <label htmlFor="correo" id='labelf'> Correo </label> <br />
                        <input type="email" name="correo" id="inputf" /> <br />
                        <label htmlFor="contrasena" id='labelf'> Contraseña </label> <br />
                        <input type="password" name="contrasena" id="inputf" /> <br />
                        <Link to="/home"><button type="submit"> Iniciar Sesion </button> <br /></Link>
                    </form>
                </div>
            </div>
        </>
    )
}