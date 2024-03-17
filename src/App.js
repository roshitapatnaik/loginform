// src/App.js
import LoginForm from './auth/LoginForm.jsx';
import SignUpForm from './components/SignUpForm.jsx';
// src/App.js
import React from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import './App.css';

function App() { 
  return (
    <div className="App">
      <h1>Login and Sign-Up Forms</h1>
      <div>
        <LoginForm />
        <SignUpForm />
      </div>
    </div>
  );
}

export default App; 

 
 
