import { BarraVertical } from '../share/BarraVertical'
import { BotonFlotante } from '../share/BotonFlotante'
import { Buscador } from '../share/Buscador'
import { Link } from 'react-router-dom'
import './PaginaPrincipal.css'

export const PaginaPrincipal = () => {

    return (
        <div className="container-fluid">
            <Buscador />
            <Link to="/registrolocal"><button className='registrar'> Registrar Tienda </button></Link>
            <BarraVertical />
            <BotonFlotante />
            <div className='ubicacion'>
                <div className='card1'></div>
                <div className='card2'></div>
                <div className='card3'></div>
            </div>
        </div>
    )
}