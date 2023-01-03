import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LandingPage from './pages/LandingPage/LandingPage'
import AdminPanel from './pages/AdminPanel/AdminPanel'
import BusketPage from './pages/BusketPage/BusketPage'
import ClientWorkspacePage from './pages/ClientWorkspacePage/ClientWorkspacePage'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app-container">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/busket" element={<BusketPage />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/client-workspace" element={<ClientWorkspacePage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
