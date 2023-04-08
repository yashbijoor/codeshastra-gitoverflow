import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Map1 from './components/Map1';
import Table from './components/Table';
import Dashboard from './pages/Dashboard';
import Select from './components/Select';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import TipsPage from './pages/Tips'
import Info from './pages/Info'
import Data from './pages/Data'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
