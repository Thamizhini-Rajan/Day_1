//App.js
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <div> 
     <Router>
        <Routes>
          <Route path='/'  element={<ResponsiveAppBar />}/>
          <Route path='/Signup'  element={<Signup />}/>
          <Route path='/Login'  element={<Login />}/>
        </Routes> 
      </Router>  
    </div>
  );
}

export default App;
