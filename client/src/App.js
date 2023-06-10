import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/views/LoginPage/LoginPage';
import Footer from './components/views/Footer/Footer';
import NavBar from './components/views/NavBar/NavBar';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LandingPage from './components/views/LandingPage/LandingPage';
import Auth from './hoc/Auth';
function App() {
  return (
    <Router>
      <div>
    <Routes>
      <Route path="/" exact element={Auth(LandingPage,null)} />
      <Route path="/login" element={Auth(LoginPage,true)} />
      <Route path="/register" element={Auth(RegisterPage,false)} />
    </Routes>
    </div>
  </Router>
  );
}

export default App;
