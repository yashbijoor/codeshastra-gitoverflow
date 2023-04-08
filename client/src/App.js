import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './pages/Signup'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Loan1 from './pages/Loan1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/data" element={<Data />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/loan" element={<Loan1 />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
