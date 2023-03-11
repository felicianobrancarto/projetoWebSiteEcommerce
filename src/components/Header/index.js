import "./header.css"
import logo from './/..//Header/DsCatalog.png'

function Header() {
return(
    <div className="box">
       <div className="imagemlogo">
       <img src={logo}/>
        </div>
        <div className="container">
        <a  href="/">HOME</a>
        <a href="/">CATÁLOGO</a>
        <a href="/">ADMIN</a>
        </div>
        
        
    </div>
)
}

export default Header;