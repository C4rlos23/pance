import { NavBarD } from '../share/NavBarD'
import { Link } from 'react-router-dom'
import './InicioSesion.css'

export const InicioSesion = () => {
    
    return (
        <>
            <NavBarD />
            <title className='h7'> Inicio Sesion </title>
            <div id='container'>
                <div id="cardCentral">
                    <form id="centrado" action="">
                        <label htmlFor="correo" id='labelf'> Correo </label> 
                        <input type="email" name="correo" id="inputf" /> <br />
                        <label htmlFor="contrasena" id='labelf'> Contrasena </label> 
                        <input type="password" name="contrasena" id="inputf" /> <br /> <br />
                        <Link to="home"><button className="btn btn-primary" id='boton' type="submit"> Iniciar Sesion </button> <br /></Link>
                    </form>
                </div>
            </div>
        </>
    )
}