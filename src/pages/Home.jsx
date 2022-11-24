import { Buscador } from '../share/Buscador'
import { BotonFlotante } from '../share/BotonFlotante'
import './Home.css'
import imagen from '../img/image_1.png'
import { Link } from 'react-router-dom'



export const Home = () => {

    return (
        <>
            <h1> Pance Food </h1>
            <Buscador />
            <Link to="registro"><button className='registrar'> Registrarse </button></Link>
            <Link to="iniciosesion"><button className='inicioSesion'> Iniciar Sesion </button></Link>
            <BotonFlotante />
            <img id='fondoI' src={imagen} alt='fondo' ></img>
            <div className='circulo3'></div>
            <div className='circulo2'></div>
            <div className='circulo1'>
                <h2> Hambre!? ¡En Pance se lo llevamos!</h2>
            </div>

            <div className="container-fluid">
                <h3> Promociones del Dia </h3>
                
            </div>

        </>
    )
}