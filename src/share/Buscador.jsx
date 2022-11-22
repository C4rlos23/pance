import './Buscador.css'
import search from '../icons/search.png'

export const Buscador = () => {

    return (
        <div className="container-fluid">
            <div id='centrar'>
                <div id='buscador'>
                    <img id='img' src={search} alt='buscar' />
                    <input id='buscar' type='search' placeholder='Buscar...'></input>
                </div>
            </div>
        </div>
    )
}