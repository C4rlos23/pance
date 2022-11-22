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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                    <button className='animado'> Ver Productos </button>
                </div>

                <div className="card">
                    <img src={qbano} alt='Qbano' />
                    <hr />
                    <h4> Qbano </h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                    <button className='animado'> Ver Productos </button>
                </div>

                <div className="card">
                    <img src={lyc} alt='Leños y Carbon'/>
                    <hr />
                    <h4> Leños y Carbon </h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                    <button className='animado'> Ver Productos </button>
                </div>
                <br />

                <div className="card">
                    <img src={subway} alt='Subway' />
                    <hr />
                    <h4> Subway </h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                    <button className='animado'> Ver Productos </button>
                </div>

                <div className="card">
                    <img src={presto} alt='Presto' />
                    <hr />
                    <h4> Presto </h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                    <button className='animado'> Ver Productos </button>
                </div>

                <div className="card">
                    <img src={kfc} alt='KFC' />
                    <hr />
                    <h4> KFC </h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                    <button className='animado'> Ver Productos </button>
                </div>
            </div>
        </>
    )
}