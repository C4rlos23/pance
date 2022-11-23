import { NavBarD } from '../share/NavBarD'
import { Link } from 'react-router-dom'
import './InicioSesion.css'

export const InicioSesion = () => {
    return (
        <>
            <NavBarD />
            <title className='h7'> Inicio Sesion </title>
            <div id='container'>
                <div className='cardCentral' id='centrado'>
                    <form action="">
                        <label htmlFor="correo" id='labelf'> Correo </label> <br />
                        <input type="email" name="correo" id="inputf" /> <br />
                        <label htmlFor="contrasena" id='labelf'> Contrasena </label> <br />
                        <input type="password" name="contrasena" id="inputf" /> <br />
                        <Link to="/home"><button className="btn btn-primary" id='boton' type="submit"> Iniciar Sesion </button> <br /></Link>
                    </form>
                </div>
            </div>
        </>
    )
}