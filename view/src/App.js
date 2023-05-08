import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';

//check

function App() {
  return (
  <Router> 
    <div>
       <Routes>
           <Route exact path="/login" Component={login}/>
           <Route exact path="/signup" Component={signup}/>
           <Route exact path="/" Component={home}/>
       </Routes>
    </div>
  </Router>
  );
}

export default App;
