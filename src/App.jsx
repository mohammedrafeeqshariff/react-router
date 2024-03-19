import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/home'
import Contacts from './components/contacts'
import About from './components/about'
function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/about' element={<About/>}/>    
    </Routes>
    </>
  )
}

export default App
