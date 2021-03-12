import React from 'react';
import LogoSenai from './img/senai--cursos-gratuitos.jpg';
import './index.css'

function Header(){
    return(

        <header> 
             <img src ={LogoSenai} alt="logo"></img>
             <p> Senai Suiço Brasileiro</p>
             <hr></hr>
         </header>
    );
}

export default Header;
