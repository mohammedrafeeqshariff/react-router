import {NavLink} from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
      <nav className='navbar'>
        <h1><NavLink className="klogo" style={{ textDecoration: 'none' , color:'white', marginLeft:"3px"}} to='/'>Kalvium ❤️</NavLink></h1>
        <div className='otherlinks'>
        <h2><NavLink style={{ textDecoration: 'none' , color:'white'}} to='/contacts'>Contacts</NavLink></h2>
        <h2><NavLink style={{ textDecoration: 'none' , color:'white'}} to='/about'>About</NavLink></h2>
        </div>
    </nav>
    </div>
  )
}

export default NavBar
