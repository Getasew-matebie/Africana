import React from 'react'
import Home from './home/Home';
import { Route, Routes} from 'react-router-dom'
import Catalog from './components/Catalog';
import Catalogs from './components/catalog/Catalogs';
import Freecourselist from './components/freecourses/Freecourselist';
import Inpersoncourselist from './components/Inpersoncourses/Inpersoncourselist';
import Signup from './components/Signup';
function App() {
  return  (
   <>
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/catalog" element={<Catalogs/>}/>
    <Route path="/free courses" element={<Freecourselist/>}/>
    <Route path="/In person courses" element={<Inpersoncourselist/>}/>
    <Route path="/signup" element={<Signup/>}/>
   </Routes>
   </div>
   </>
  );
  }
    
export default App
