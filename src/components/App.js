import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
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
      <Navbar loggedInUser={loggedInUser} activateUser={activateUser} />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/auth/signin' element={<LoginForm activateUser={activateUser} />} />
        <Route path='/auth/signup' element={<SignUpForm activateUser={activateUser} />} />
        <Route path='/adminpage' element={<AdminPage />} />
        <Route path='/userpage' element={<UserPage />} />
        <Route path='/fc' element={<FcList />} />
        <Route path='/fc/:id' element={<FcPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <div>
        
      <Footer/>

        </div>
    </Router>
  );
}

export default App;
