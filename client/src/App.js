import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Map1 from './components/Map1';
import Table from './components/Table';
import Dashboard from './pages/Dashboard';
import Select from './components/Select';


function App() {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <div>
        
      <Dashboard/>
      
    </div>
    </>
  );
}

export default App;
