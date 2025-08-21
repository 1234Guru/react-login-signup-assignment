import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import FormInput from '../components/FormInput';

const Login = () => {
  const [creds, setCreds] = useState({ id: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state?.signedUp) {
      setSuccess('Sign up successful. Please login.');
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setCreds((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const userRaw = localStorage.getItem('demo_user');
    if (!userRaw) {
      setError('No user found. Please Sign Up first.');
      return;
    }
    const user = JSON.parse(userRaw);
    const idLower = creds.id.trim().toLowerCase();
    const matchesId = idLower === user.username.toLowerCase() || idLower === user.email.toLowerCase();
    if (!matchesId || creds.password !== user.password) {
      setError('Invalid credentials');
      return;
    }
    setSuccess(`Welcome back, ${user.name}!`);
  };

  return (
    <main className="container">
      <div className="card">
        <div className="header">
          <div className="brand">Login</div>
          <div className="actions"><Link to="/signup" className="link">Sign Up</Link></div>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <FormInput label="Username or Gmail" name="id" value={creds.id} onChange={onChange} placeholder="john_doe99 or name@gmail.com" />
          <FormInput label="Password" type="password" name="password" value={creds.password} onChange={onChange} placeholder="Your password" />
          <Button type="submit">Login</Button>
          {error && <div className="error" role="alert">{error}</div>}
          {success && <div className="success" role="status">{success}</div>}
          <div className="helper">Don’t have an account? <Link to="/signup">Create one</Link></div>
        </form>
      </div>
    </main>
  );
};

export default Login;
