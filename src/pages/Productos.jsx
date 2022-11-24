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
            <h3 className='masUno'> + </h3> 
            <h4 className='masDos'> + </h4>
            <h5 className='masTres'> + </h5>
            <div className='cardComenta'>
            <h2 className='comenta'> Comentario Extra </h2>
                </div> 
            <div className='circleNum'>
            </div>
            <div className='circleMas'>
            </div>
            <div className='circleMenos'>
            </div>

            <div className='rectCanas'>
                <h1 className='mas'> + </h1>
                <h2 className='menos'> - </h2>
                <h3 className='numero'> 2 </h3>
                <h6 className='agregar'> Agregar a Canasta </h6>
            </div>
            <div className='cardIngred'>
                <h4 className='ingre'> Ingredientes </h4>
                <h5 className='ingredientes'> Carne 200gr <br/> Tomate <br/> Pepino <br/> Cebolla <br/> Salsa de Tomate <br/> Salsa Mayonesa <br/> Tocineta </h5>

            </div>
            <BotonFlotante/>
        </>
    )
}
