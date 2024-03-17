// src/components/LoginForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
const LoginForm = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add logic for handling login
    console.log('Logging in...');
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <TextField
          label="Username or Email"
          variant="outlined"
          fullWidth
          required
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
