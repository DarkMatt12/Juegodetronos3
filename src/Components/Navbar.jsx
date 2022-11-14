import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
const Navbar = () => {
    const {t, changeLanguage} =useContext(MyContext)
  return (
    <nav>
        <button className='btn-es' onClick={()=>changeLanguage('es')}></button>

        <button className='btn-en' onClick={()=>changeLanguage('en')}></button>
    </nav>
  )
}
export default Navbar