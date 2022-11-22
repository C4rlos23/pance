import { BarraV } from '../share/BarraV'
import { Buscador } from '../share/Buscador'
import './Restaurantes.css'
import mc from '../img/mcdonals.jpg'
import qbano from '../img/qbano.png'
import lyc from '../img/lenosycarbon.png'
import subway from '../img/subway.jpg'
import presto from '../img/presto.png'
import kfc from '../img/kfc.jpg'
import { BotonFlotante } from '../share/BotonFlotante'


export const Restaurantes = () => {

    return (
        <>
            <BarraV />
            <Buscador />
            <BotonFlotante />
            <div className="container">

                <div className="card">
                    <img src={mc} alt='Mc Donalds' />
                    <hr />
                    <h4>Mc Donald's</h4>
                    <hr />
                    <p>Mc Donald's es una franquicia muy conocida con especialidad en hamburguesas y comida rapida.</p>
                    <button className='animado'> Ver Productos </button>
                </div>

                <div className="card">
                    <img src={qbano} alt='Qbano' />
                    <hr />
                    <h4> Qbano </h4>
                    <hr />
                    <p>Cadena de restaurantes colombiana con especialidad en sandwich cubano y submarino con mas de 150 sedes.</p>
                    <button className='animado'> Ver Productos </button>
                </div>

                <div className="card">
                    <img src={lyc} alt='Leños y Carbon'/>
                    <hr />
                    <h4> Leños y Carbon </h4>
                    <hr />
                    <p>Es una cadena de restaurantes de tipo steak house con especialidad en cortes de carnes y picadas.</p>
                    <button className='animado'> Ver Productos </button>
                </div>
                <br />

                <div className="card">
                    <img src={subway} alt='Subway' />
                    <hr />
                    <h4> Subway </h4>
                    <hr />
                    <p>Es una cadena de restaurantes especializada en la elaboracion de sandwich submarino y bocadillos.</p>
                    <button className='animado'> Ver Productos </button>
                </div>

                <div className="card">
                    <img src={presto} alt='Presto' />
                    <hr />
                    <h4> Presto </h4>
                    <hr />
                    <p>Presto es la tercera cadena de hamburguesas del país con su enfoque en las hamburguesas gourmet.</p>
                    <button className='animado'> Ver Productos </button>
                </div>

                <div className="card">
                    <img src={kfc} alt='KFC' />
                    <hr />
                    <h4> KFC </h4>
                    <hr />
                    <p>KFC es una cadena de restaurantes de comida rápida estadounidense especializada en pollo frito.</p>
                    <button className='animado'> Ver Productos </button>
                </div>
            </div>
        </>
    )
}