import React from "react";
import  styles from "./Header.module.css"
import logo from './/..//Header/DsCatalog.png'

function Header() {
return(
    <div className={styles.box}>
       <div className={styles.imagemlogo}>
       <img src={logo}/>
        </div>
        <div className={styles.container}>
        <a  href="/">HOME</a>
        <a href="/">CATÁLOGO</a>
        <a href="/">ADMIN</a>
        </div>
        
        
    </div>
)
}

export default Header;