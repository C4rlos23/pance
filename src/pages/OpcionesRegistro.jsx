import { NavBarD } from '../share/NavBarD'
import { Link } from 'react-router-dom'
import './OpcionesRegistro.css'

export const OpcionesRegistro = () => {
    return (
        <>
            <NavBarD />
            <div id='container'>
                <div id='cardCentral'>
                    <form id='centrado'>
                        <div className='inputs'>
                            <label htmlFor="nombres" id='labelf'>
                                Nombre </label> <br />
                            <input type='text' id='inputf' name='nombres'
                                placeholder='Patricia Maria' required></input> <br /> <br />
                            <label htmlFor="apellidos" id='labelf'>
                                Apellido </label> <br />
                            <input type='text' id='inputf' name='apellidos'
                                placeholder='Estrella Alvarez' required></input> <br /> <br />
                            <label htmlFor="correo" id='labelf'>
                                Correo </label> <br />
                            <input type='email' id='inputf' name='correo'
                                placeholder='hola@gmail.com' required></input> <br /> <br />
                            <label htmlFor="contrasena" id='labelf'>
                                Contraseña </label> <br />
                            <input type='password' id='inputf' name='contrasena'
                                placeholder='********' required></input> <br />
                            <label id='labeltyc'>
                                <input type="checkbox" id="teyco" value="teyco"></input>
                                Acepto los Terminos y Condiciones</label>
                            <Link to='/home'> <button className="btn btn-primary" id='boton' type="submit"> Registrarse </button> </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}