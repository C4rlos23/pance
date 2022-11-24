import { NavBarD } from "../share/NavBarD"
import './OpcionesRegistro.css'

export const OpcionesRegistro = () => {

    
    return (
        <>
            <NavBarD />
            <title className='h8'> Registrate </title>
            <div id='container'>
                <div id="cardCentral">
                    <form id="centrado" action="">
                    <label htmlFor="name" id='labelf'> Nombre </label> 
                        <input type="name" name="correo" id="inputf" required /> <br />
                        <label htmlFor="correo" id='labelf'> Correo </label> 
                        <input type="email" name="correo" id="inputf" required /> <br />
                        <label htmlFor="contrasena" id='labelf'> Contrasena </label> 
                        <input type="password" name="contrasena" id="inputf" required/> <br /> <br />
                        <button className="btn btn-primary" id='boton' type="submit"> Registrar </button> <br />
                    </form>
                </div>
            </div>
        </>
    )
}