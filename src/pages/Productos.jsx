import { BarraV } from '../share/BarraV'
import './Productos.css'
import hamburguer from '../img/hamburguer.png'
import { BotonFlotante } from '../share/BotonFlotante'

export const Productos = () => {
    return (
        <>
            <BarraV/> 
            <div className='cardHambur'>
                <img className='hamburguer' src={hamburguer} alt="Hamburguer" />  
            </div>
            <div className='cardAdicion'>
            <h1 className='adicion'> Adicionales </h1>
            <div className='rectUno'>
                <div className='circleUno'>
                </div>
                <div className='rectDos'>
                    <div className='circleDos'>
                    </div>
                        <div className='rectTres'>
                            <div className='circleTres'>
                            </div>
            
                        
                    </div>

            </div>    
            </div>
            </div>  
            <div className='cardComenta'>
            <h2 className='comenta'> Comentario Extra </h2>
                </div> 
            <BotonFlotante/>
        </>
    )
}
