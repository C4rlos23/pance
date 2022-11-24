import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home"
import { PaginaPrincipal } from "./PaginaPrincipal";
import { OpcionesRegistro } from "./OpcionesRegistro";
import { InicioSesion } from "./InicioSesion";
import { Restaurantes } from "./Restaurantes";
import { Compra } from "./Compra";
import { Perfil } from "./Perfil";
import { Canasta } from "./Canasta";

import { Chat } from "./Chat";
import { Productos } from "./Productos"

export const MainApp = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}> </Route>
            <Route exact path="/registro" element={<OpcionesRegistro />}></Route>
            <Route path="/registro/home" element={<PaginaPrincipal />}></Route>
            <Route path="/iniciosesion/home" element={<PaginaPrincipal />}></Route>
            <Route path="/home" element={<PaginaPrincipal />}></Route>
            <Route path="/iniciosesion" element={<InicioSesion />}></Route>
            <Route path="/restaurantes" element={<Restaurantes />}></Route>
            <Route path="/compra" element={<Compra />}></Route>
            <Route path="/perfil" element={<Perfil />}></Route>
            <Route path="/carrito" element={<Canasta />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/Productos" element={ <Productos />}> </Route>
        </Routes>
    )
}