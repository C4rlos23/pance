import './Locales.css'
import { NavBarD } from "../share/NavBarD"
import { Link } from 'react-router-dom'


export const Locales = () => {
    return (
        <>
            <NavBarD/>
            <div id='container'>
                <div id='cardCentral'>
                    <form id='centrado'>
                        <div className='inputs'>
                            <label htmlFor="local" id='labelf'>
                                Nombre del Local </label> <br />
                            <input type='text' id='inputf' name='local'
                                placeholder='Asados Pance' required ></input> <br /> <br />
                            <label htmlFor='nombre admin' id='labelf'>
                                Nombre Administrador </label> <br />
                            <input type='text' id='inputf' name='nombre admin'
                                placeholder='Julian David' required></input> <br /> <br />
                            <label htmlFor='apellido admin' id='labelf'>
                                Apellido Administrador </label> <br />
                            <input type='text' id='inputf' name='apellido admin'
                                placeholder='Gutierrez Lozano' required></input> <br /> <br />
                            <label htmlFor='correo' id='labelf'>
                                Correo </label> <br />
                            <input type='email' id='inputf' name='correo'
                                placeholder='comida@gmail.com' required></input> <br /> <br/>
                            <label htmlFor='contrasena' id='labelf'>
                                Contraseña </label> <br />
                            <input type='password' id='inputf' name='contrasena'
                                placeholder='********' required></input> <br /> 
                            <label id='labeltyc'>
                                <input type="checkbox" id="teyco" value="teyco"></input>
                                Acepto los Terminos y Condiciones </label>
                            <Link to='/home'> <button className="btn btn-primary" id='boton' type="submit"> Registrar Local </button></Link>
                            

                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}