import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg'
import ExtraHeaders from './ExtraHeaders';



const Header = ({ username, signout, display, showDisplay }) =>
  <header className='App-header'>
    <h1 className='App-title'>
    {username ? `Welcome, ${username.toUpperCase()}` : 'Welcome to React'}
    <br />
    {username ? 
    <div>
    <button onClick={signout}>SIGN OUT</button> 
    </div>
    : <Link to='/signin'><button>SIGN IN</button></Link>}
    <br />
    {username ?
    null 
    : <Link to='/signup'><button>SIGN UP</button></Link>}
    {username ?
      < ExtraHeaders showDisplay={showDisplay} display={display} />
      : null
      }
      
    </h1>
  </header>

export default Header

// const Header = ({ username, signout }) =>
//   <header className='App-header'>
//     <img src={logo} className='App-logo' alt='logo' />
//     <h1 className='App-title'>
//       {
//         username
//           ? `Welcome back, ${username}!`
//           : 'Welcome to React.'
//       }
//       <br />
//       {
//         username
//           ? <button onClick={signout}>SIGN OUT</button>
//           : <Link to='/signin'><button>SIGN IN</button></Link>
//       }
//     </h1>
//   </header>

// export default Header