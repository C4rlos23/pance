import './NavBarD.css';
import devolver from '../icons/Devolver.png'
import { Link } from 'react-router-dom';

export const NavBarD = () => {
    return (
        <div >
            <div id='navBar'>
                <h1 id='letterNav'> Pance Food </h1>
                <Link to="/"><img id='devolver' src={devolver} alt='Atras' /></Link>
            </div>
        </div>
    )
}