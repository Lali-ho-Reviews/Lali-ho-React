import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import AdminPage from '../pages/AdminPage';
import UserPage from '../pages/UserPage';
import FcList from '../pages/FcList';
import FcPage from '../pages/FcPage';




function App() {
  return (
    
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/FcList"> Free Company List</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/adminpage' element={<AdminPage />} />
        <Route path='/userpage' element={<UserPage />} />
        <Route path='/fclist' element={<FcList />} />
        <Route path='/fcpage/:id' element={<FcPage />} />
      </Routes>
      <div>
        
        <p>FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.</p>
        <p>FINAL FANTASY XIV © SQUARE ENIX CO., LTD.</p>

        </div>
    </Router>
  );
}

export default App;
