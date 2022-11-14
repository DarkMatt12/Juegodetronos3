import React, {  useContext, useEffect} from "react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { MyContext } from "../../context/MyContext";

const Footer= () => {
  const {t} = useContext(MyContext)
  let location = useLocation();
  console.log(location.pathname) 
    return (
        <nav className='footer-nav'>

        <div><Link to="/personajes" className={location.pathname=== "/personajes"? 'xd1':'xd2'}><h1 className="footer-txt">{t('footer_a')}</h1></Link></div>
        <div><Link to="/casas" className={location.pathname=== "/casas"? 'xd1':'xd2'}><h1 className="footer-txt">{t('footer_b')}</h1></Link></div>
        <div><Link to="/cronologia" className={location.pathname=== "/cronologia"? 'xd1':'xd2'}><h1 className="footer-txt">{t('footer_c')}</h1></Link></div>
      </nav>
    )
  }

export default Footer;