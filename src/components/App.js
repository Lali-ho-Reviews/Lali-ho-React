import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import React, { useState } from 'react';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import AdminPage from '../pages/AdminPage';
import UserPage from '../pages/UserPage';
import FcList from '../pages/FcList';
import FcPage from '../pages/FcPage';
import About from '../pages/About';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginForm from '../pages/LoginForm';
import SignUpForm from '../pages/SignUpForm';




function App() {

  const [loggedInUser, setLoggedInUser] = useState("")
  const activateUser = (props) => {
    setLoggedInUser(props)
  }
  
  


  return (
    
    <Router>
      <div>
        {window.location.pathname != '/auth/signin' &&  window.location.pathname != '/auth/signup' ? <Navbar loggedInUser={loggedInUser} activateUser={activateUser} /> : null}
        
      
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/auth/signin' element={<LoginForm activateUser={activateUser} />} />
        <Route path='/auth/signup' element={<SignUpForm activateUser={activateUser} />} />
        <Route path='/adminpage' element={<AdminPage />} />

        <Route path='/profile' element={<UserPage />} />

        <Route path='/fc' element={<FcList />} />
        <Route path='/fc/:id' element={<FcPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <div>
        {window.location.pathname != '/profile' ? <Footer/> : null}
      

        </div>
    </Router>
  );
}

export default App;
