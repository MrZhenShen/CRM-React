import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Landing from './pages/Landing/Landing'
import AdminPanel from './pages/AdminPanel/AdminPanel'
import Busket from './pages/Busket/Busket'
import LoginPage from './pages/LoginPage/LoginPage'
import ClientWorkspacePage from './pages/ClientWorkspacePage/ClientWorkspacePage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app-container">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/busket" element={<Busket />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/client-workspace" element={<ClientWorkspacePage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
