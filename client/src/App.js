import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/views/LoginPage/LoginPage';
import Footer from './components/views/Footer/Footer';
import NavBar from './components/views/NavBar/NavBar';
import ResgisterPage from './components/views/RegisterPage/ResgisterPage';
import LandingPage from './components/views/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <div>
    <Routes>
      <Route path="/" exact element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<ResgisterPage/>} />
    </Routes>
    </div>
  </Router>
  );
}

export default App;
