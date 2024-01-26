import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import casa from './casa.svg';
import boto from './boton.svg'
import tel from './llamada-telefonica.svg'
import email from './email.svg'

export default function Contacte() {
  return (
    <div id="Contacte">
        <p><img src={casa} high='20' width='20' class="d-inline-block align-top"></img> C/ MAJOR, 159 1R 2N, SALT (GIRONA)</p>
        <p><img src={tel} high='20' width='20' class="d-inline-block align-top"></img> 686 56 73 67</p>
        <p><img src={email} high='20' width='20' class="d-inline-block align-top"></img> arnaumolassague@gmail.com</p>
        <p><img src={boto} high='20' width='20' class="d-inline-block align-top"></img> 29 de Gener de 1999</p>
    </div>
  )
}
