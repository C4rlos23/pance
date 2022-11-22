import { NavBarD } from '../share/NavBarD'
import './Compra.css'
import iconomapa from '../img/imapa.png'

export const Compra = () => {

    return (
        <>
            <NavBarD />
            <div className='ca01'>
                <h4 className='texto1'> Direccion de Entrega </h4>
                <h5 className='texto2'> Calle 00 # 00 - 00 </h5>
                <h6 className='texto3'> Instrucciones </h6>
                <hr className='line' />
                <h6 className='texto4'> Tipo de Entrega </h6>
                <img className='ubicado' src={iconomapa} alt="Mapa" />
            </div>
            <div className='ca02'>
                <h4 className='mtp'> Metodo de Pago </h4>
                <select name="metodopago" className='smtp' id="">
                    <option className='letter' value="Efectivo"></option>
                    <option value="Tarjeta"></option>
                    <option value="PSE"></option>
                </select>
            </div>
            <div className='ca03'>
                <h4 className='c1'> Resumen </h4>
                <hr className='l1' />
                <h6 className='cp1'> Precio </h6>
                <h6 className='cp2'> Domicilio </h6>
                <h6 className='cp3'> Propina </h6>
            </div>
            <button className='btnp'>
                <p className='tap'> Total a pagar <br /> jadiuasj </p>
                <p className='hcp'> Hacer <br /> Pedido</p>
            </button>
        </>
    )
}