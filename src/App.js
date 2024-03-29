import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={ <Home/> }/>
          </Routes>
      </Router>
      
    </>
  );
}

export default App;