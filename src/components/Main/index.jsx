import React from 'react';
import './main.css'
import Imagem from './Desenho.svg'

function index(pros) {
    return (
        <div className='containerMain'>
            <div className='boxEsquerdoMain'>
            <p className='p1'>Conheça o melhor catálogo de produtos</p>
            <p className='p2'>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</p>
            <button className='button'>INICIE AGORA A SUA BUSCA</button>
            </div>
            <div>
            <img src={Imagem} alt='Imagem main' className='boxImagem'></img>
            </div>
            

            
        </div>
    );
}

export default index;