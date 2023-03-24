import React from 'react';
import './mainAdmin.css'
import Imagem from './imagemAdmin.svg'

function index(pros) {
    return (<>
        <div className='containerAdmin'>
            <div className='boxEsquerdoMain'>
            <p className='text1'>Divulgue seus produtos no DS Catalog</p>
            <p className='text2'>Faça parte do nosso catálogo de divulgação e aumente a venda dos seus produtos.</p>
            <img src={Imagem} alt='Imagem Admin' className='imagemAdmin'></img>
            </div>
            <div>
            
            </div>
            

            
        </div>
        </>
    );
}

export default index;