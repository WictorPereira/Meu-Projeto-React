import { BrowserRouter as Router, Route, Link, Routes } from'react-router-dom'
import Home from '../src/components/pages/Home'
import Company from '../src/components/pages/Company'
import Contact from '../src/components/pages/Contact'
import NewProject from '../src/components/pages/NewProject'
import Container from './components/layout/Container.jsx'



function App() {
  return (
    
   <Router>
    
    <div>
      <Link to="/">Home</Link>
      <Link to="/Contact">Contato</Link>
      <Link to="/Company">Empresa</Link>
      <Link to="/NewProject">Novo projeto</Link>
    </div>
    <Container customClass="min-height">
    <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/newproject' element={<NewProject/>}/>
    </Routes>
    </Container>
    <p>Footer</p>
   
   </Router>

   
  );

}

export default App
