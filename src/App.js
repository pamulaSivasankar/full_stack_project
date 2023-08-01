
import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact';
import Studentdetails from './components/Student-details';
import Register from './components/Register';
import Login from './components/Login';
import Gallery from './components/Gallery'
import {ToastContainer} from 'react-toastify';
import './App.css'
import Courses from './components/Courses';

const username = sessionStorage.getItem('username');
function App() {
  
  return (
    <div>
    <ToastContainer></ToastContainer>  
  <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <i class="fa-solid fa-graduation-cap fa-2xl"></i>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/Student-details'>Studentdetails</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to='/Contact'>Contact</Link>
              </li>  
              <li className="nav-item">
              <Link className="nav-link" to='/Gallery'>Gallery</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to='/Courses'>Courses</Link>
              </li>   
              <li className="nav-item">
              <Link className="nav-link" to='/Login'>Login</Link>
              </li>  
              <li className="nav-item">
              <Link className="nav-link" to='/Register'>Register</Link>
            </li>
            <li>{username !== null && <> <Link className='nav-link'><i className="fa-solid fa-user fa-2xl"></i>{username}</Link></>}</li>
          </ul>
          
           </div>       
           </div>   
          </nav>

<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/Student-details' element={<Studentdetails/>}></Route>
<Route path='/Contact' element={<Contact/>}></Route>
<Route path='/Register' element={<Register/>}></Route>
<Route path='/Login' element={<Login/>}></Route>
<Route path='/Gallery' element={<Gallery/>}></Route>
<Route path='/Courses' element={<Courses/>}></Route>

</Routes>
</Router>

</div>
  );
}

export default App;
