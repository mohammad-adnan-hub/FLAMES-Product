import React from 'react';
import { BrowserRouter,Routes,Route,} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Resources from './pages/Resources'
import Enrolled from './pages/Enrolled'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/enrolled" element={<Enrolled/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;