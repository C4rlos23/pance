import { NavBarD } from '../share/NavBarD'
import './OpcionesRegistro.css'
import React, { useState } from 'react'
import { auth } from '../firebase'

export const OpcionesRegistro = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const registrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
        .then((res) => alert('Usuario Registrado'))
        .catch(err => alert('La contraseña debe tener 6 o mas caracteres'));
    }

    return (
        <>
            <NavBarD />
            <div id='container'>
                <div id='cardCentral'>
                <title className='h8'> Registro </title>
                    <form id='centrado' onSubmit={registrarUsuario}>
                        <div className='inputs'>
                            <label htmlFor="nombres" id='labelf'>
                                Nombre </label> <br />
                            <input type='text' id='inputf' name='nombres'
                                placeholder='Patricia Maria' required></input> <br /> <br />
                            <label htmlFor="apellidos" id='labelf'>
                                Apellido </label> <br />
                            <input type='text' id='inputf' name='apellidos'
                                placeholder='Estrella Alvarez' required></input> <br /> <br />
                            <label htmlFor="correo" id='labelf'>
                                Correo </label> <br />
                            <input onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type='email' id='inputf' name='correo'
                                placeholder='hola@gmail.com' required></input> <br /> <br />
                            <label htmlFor="contrasena" id='labelf'>
                                Contraseña </label> <br />
                            <input onChange={(e) => {
                                setPass(e.target.value)
                            }}
                            type='password' id='inputf' name='contrasena'
                                placeholder='********' required></input> <br />
                            <label id='labeltyc'>
                                <input type="checkbox" id="teyco" value="teyco"></input>
                                Acepto los Terminos y Condiciones</label>
                            <button className="btn btn-primary" id='boton' type="submit" value="Registrar"> Registrarse </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}