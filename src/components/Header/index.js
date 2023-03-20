import React from "react";
import  styles from "./Header.module.css"
import logo from './/..//Header/DsCatalog.png'
import { NavLink } from 'react-router-dom'

function Header() {
return(
    <nav className={styles.navbar}>
       <img src={logo} className={styles.imagemlogo}/>
        <div className={styles.container}>
        <NavLink to="/" className={styles.link} activeClassName="select">HOME</NavLink>
        <NavLink to="/catalogo" className={styles.link}activeClassName="select">CATÁLOGO</NavLink>
        <NavLink to="/admin" className={styles.link} activeClassName="select">ADMIN</NavLink>
        </div>
        
    </nav>
)
}

export default Header;