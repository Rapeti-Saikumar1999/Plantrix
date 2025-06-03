import './App.css';
import Banner from './components/Banner';
import Login from './components/Login';
import React from 'react';
import {BrowserRouter as  Router, Route, Routes}  from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Banner/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
