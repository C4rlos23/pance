import { BarraV } from '../share/BarraV'
import { BotonFlotante } from '../share/BotonFlotante'
import './Perfil.css'
import rest1 from '../img/rest1.png'
import rest2 from '../img/rest2.png'
import rest3 from '../img/rest3.png'
import sancocho from '../img/sancocho.png'
import una from '../icons/01.png'
import dos from '../icons/02.png'
import tres from '../icons/03.png'
import i from '../icons/i.png'

export const Perfil = () => {
    return (
        <>
            <BarraV />
            <h1 className='h1'> Ultimo Pedido </h1>
            <div className='cardUltimo' >
                <img className='sancocho' src={sancocho} alt="Sancocho" />
                <h2 className='h'> Sancocho de Gallina </h2>
                <h5 className='h5'> Restaurante: La Sazon de la Abuela </h5>
                <img className='information' src={i} alt="informacion" />
                <button className='btn1'> Volver a Pedir</button>
            </div>
            <h4 className='h4'> Top Restaurantes <br /> Preferidos </h4>
            <img className='one' src={una} alt="uno" />
            <div className='cardResta'>
                <img className='img' src={rest1} alt="Sabores y Tradiciones" />
            </div>
            <img className='two' src={dos} alt="dos" />
            <div className='cardResta2'>
                <img className='img' src={rest2} alt="McDonald's" />
            </div>
            <img className='three' src={tres} alt="tres" />
            <div className='cardResta3'>
                <img className='img' src={rest3} alt="KFC" />
            </div>
            <BotonFlotante />
        </>
    )
}