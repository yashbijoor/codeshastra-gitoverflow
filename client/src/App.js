import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Map1 from './components/Map1';
import Table from './components/Table';
import Dashboard from './pages/Dashboard';
import Select from './components/Select';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm'
import TipsPage from './components/Tips'


    

function App() {
  return (
    <div className="App">

    {/* <header>
      <Navbar></Navbar>
    </header>
    <div>
        
      <Dashboard/> */}
      
      <TipsPage/>
      {/* <Header/>
      <RegistrationForm/> */}
    </div>
  );
}

export default App;
