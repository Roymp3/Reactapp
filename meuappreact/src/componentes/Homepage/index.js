import React from 'react';
import Eltrotecnica from './img/aux-eletro.jpg';
import Mecanico from './img/mecanico.jpg';
import Montagem from './img/montagem-hidraulica-industrial-02.jpg';
import './index.css';


function Card(){
    return(
        <main>
         <img  id="home" src={Eltrotecnica} /><br/>
        <br/> <p>Titulo:AUXILIAR DE ELETRÔNICA Carga horaria: 80 horas Preço: Gratis</p>
          <img  id="home" src={Montagem}/><br/>
        <br/> <p> Titulo:AUTOMAÇÃO HIDRÁULICA INDUSTRIAL Carga horaria 180 Preço: Gratis </p>
          <img  id="home"src={Mecanico} /><br/>
        <br/> <p> Titulo: MECÂNICO DE MOTOR CICLO DIESEL Carga horaria: 180 Preço: Gratis</p>
        </main>
   
    );
}

export default Card