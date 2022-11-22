import './BarraV.css'
import canasta from '../icons/canasta.png'
import cupones from '../icons/cupones.png'
import home from '../icons/home.png'
import perfil from '../icons/perfil.png'
import soporten from '../icons/soporten.png'
import devolver from '../icons/Devolver.png'
import logout from '../icons/logout.png'
import { Link } from 'react-router-dom'

export const BarraV = () => {

    return(
        <>
            <div className='barral'>
                <Link to="/"><img className='atras' src={devolver} alt="atras" /></Link>
                <Link to="/perfil"><img className='perfil' src={perfil} alt="perfil" /></Link>
                <Link to="/chat"><img className='soporte' src={soporten} alt="soporte" /></Link>
                <Link to=""><img className='cupones' src={cupones} alt="cupones" /></Link>
                <Link to="/home"><img className='inicio' src={home} alt="Inicio" /></Link>
                <Link to="/carrito"><img className='canasta' src={canasta} alt="Carrito" /></Link>
                <Link to="/"><img className='logout' src={logout} alt="Salir" /></Link>
            </div>
        </>
    )
}