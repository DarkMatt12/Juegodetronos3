import './App.css';
import InicioPage from './Pages/InicioPage/InicioPage';
import PersonajesPage from './Pages/PersonajesPage/PersonajesPage';
import PersonajesDetallesPage from './Pages/PersonajesDetallesPage/PersonajesDetallesPage';
import CasasPage from './Pages/CasasPage/CasasPage';
import CasasDetallesPage from './Pages/CasasDetallesPage/CasasDetallesPage';
import CronologiaPage from './Pages/CronologiaPage/CronologiaPage';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Navbar from './Components/Navbar';
import { useTranslation } from 'react-i18next';
import { MyContext } from './context/MyContext';






function App() {
  const {t,i18n} = useTranslation(['translation'])

  const changeLanguage = (code) => {

    i18n.changeLanguage(code)

  }
  return (
    <MyContext.Provider value={{t, changeLanguage}}>
    <Router>
      
      
    <div>
      <Routes>
      <Route path="/" element={<InicioPage></InicioPage>} />
      <Route path="/personajes" element={<PersonajesPage></PersonajesPage>} />
      <Route path="/personajes/:name" element={<PersonajesDetallesPage></PersonajesDetallesPage>} />
      <Route path="/casas" element={<CasasPage></CasasPage>} />
      <Route path="/casas/:name" element={<CasasDetallesPage></CasasDetallesPage>} />
      <Route path="/cronologia" element={<CronologiaPage></CronologiaPage>} />
      </Routes>
      
    </div>


    
        
    
    

    </Router></MyContext.Provider>
  );
  
}

export default App;
