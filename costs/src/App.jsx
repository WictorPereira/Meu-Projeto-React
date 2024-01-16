import { BrowserRouter as Router, Route, Link, Routes } from'react-router-dom'
import Home from '../src/components/pages/Home'
import Company from '../src/components/pages/Company'
import Contact from '../src/components/pages/Contact'
import NewProject from '../src/components/pages/NewProject'
import Projects from './components/pages/Projects.jsx'

import Container from './components/layout/Container.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'




function App() {
  return (
    
   <Router>
    <Navbar/>
    <Container customClass="min-height">
    <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/newproject' element={<NewProject/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    </Container>
    <Footer/>
   
   </Router>

   
  );

}

export default App
