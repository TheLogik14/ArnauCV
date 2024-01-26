import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg'
import { Image } from 'react-bootstrap';
export default function 
() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#App">
                <img src={logo} width="35" height="35" class="d-inline-block align-top" alt="Logo"/>
                Corriculum Vitae            
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <il class="nav-item active"><a class="nav-link" href="#App">Home </a></il>
                    <il class="nav-item active"><a class="nav-link" href="#Contacte">Contacte </a></il>
                    <il class="nav-item active"><a class="nav-link" href="#Estudis">Estudis </a></il>
                    <il class="nav-item active"><a class="nav-link" href="#Exp">Experiencia Laboral </a></il>
                    <il class="nav-item active"><a class="nav-link" href="#Info">Informació Adicional </a></il>
                    <il class="nav-item active"><a class="nav-link" href="#Idioma">Idiomes </a></il>
                    <il class="nav-item active"><a class="nav-link" href="#Perfil">Perfil </a></il>
                    <il class="nav-item active"><a class="nav-link" href="#Hab">Habilitats </a></il>
                </ul>
            </div>
        </nav>
    </div>
  )
}