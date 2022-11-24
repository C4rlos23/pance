import React from "react";
import {  Route, Routes } from "react-router-dom";
import { Home } from "./Home"
import { Registro } from "./Registro";
import { PaginaPrincipal } from "./PaginaPrincipal";
import { OpcionesRegistro } from "./OpcionesRegistro";
import { InicioSesion } from "./InicioSesion";
import { Restaurantes } from "./Restaurantes";
import { Compra } from "./Compra";
import { Perfil } from "./Perfil";
import { Canasta } from "./Canasta";
import { Siguetu } from "./Siguetu"
import { Chat } from "./Chat";
import { Locales } from "./Locales";



export const MainApp = () => {
    return(
        <Routes>
            <Route path="/" element={ <Home /> }> </Route>
            <Route path="/registrocorreo" element={ <OpcionesRegistro /> }></Route>
            <Route path="/opcionesregistro" element={ <Registro /> }></Route>
            <Route path="/home" element={ <PaginaPrincipal/> }></Route>
            <Route path="/iniciosesion" element={ <InicioSesion/> }></Route>
            <Route path="/restaurantes" element={ <Restaurantes /> }></Route>
            <Route path="/compra" element={ <Compra />}></Route>
            <Route path="/perfil" element={ <Perfil />}></Route>
            <Route path="/carrito" element={ <Canasta />}></Route>
            <Route path="/siguetupedido" element={ <Siguetu />}></Route>
            <Route path="/chat" element={ <Chat /> }></Route>
            <Route path="/registrolocal" element={ <Locales /> }></Route>
        </Routes>        
    )
}