import React, { useState }  from 'react';
import styles from './Botao.module.css'
import { redireciona } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';


function Botao(props) {
    const [redireciona, setRedireciona] = useState(false)

    function chamadaEvento() {
        setRedireciona(true);
    }

    if (redireciona) {
        return <redireciona to="/Catalogo" />
    }

    return (
        <>
        <button className={styles.button} icon={FaChevronRight} onClick={chamadaEvento}>
            INICIE AGORA A SUA BUSCA <FaChevronRight className={styles.icon}/> 
            </button>
        
        </>
    );
}

export default Botao;