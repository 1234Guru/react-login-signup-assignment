import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { validateName, validateUsername, validatePassword, validateConfirm, validateEmail, validatePhone, allValid } from '../validation/rules';

const SignUp = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    name: '', username: '', email: '', phone: '', password: '', confirm: ''
  });
  const [touched, setTouched] = useState({});

  const errors = useMemo(() => ({
    name: validateName(fields.name),
    username: validateUsername(fields.username),
    email: validateEmail(fields.email),
    phone: validatePhone(fields.phone),
    password: validatePassword(fields.password, fields.username),
    confirm: validateConfirm(fields.confirm, fields.password)
  }), [fields]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFields((s) => ({ ...s, [name]: value }));
  };
  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set all touched to true to show errors if any
    setTouched(Object.keys(fields).reduce((acc, k) => (acc[k] = true, acc), {}));

    if (!allValid(errors)) return;

    // Persist minimal user record locally for demo
    const user = {
      name: fields.name.trim(),
      username: fields.username.trim(),
      email: fields.email.trim().toLowerCase(),
      phone: fields.phone.trim(),
      // Never store plain passwords in real apps. This is only for the assignment demo.
      password: fields.password
    };
    localStorage.setItem('demo_user', JSON.stringify(user));
    // Redirect to Login after signup
    navigate('/login', { replace: true, state: { signedUp: true } });
  };

  const showError = (k) => touched[k] ? errors[k] : '';

  return (
    <main className="container">
      <div className="card">
        <div className="header">
          <div className="brand">Create account</div>
          <div className="actions"><Link to="/login" className="link">Login</Link></div>
        </div>
        <form onSubmit={handleSubmit} noValidate>
  <div className="form-grid">
    <FormInput className="col-span-2" label="Name" name="name" value={fields.name} onChange={onChange} onBlur={onBlur} error={showError('name')} placeholder="John Doe" />
    <FormInput label="User Name" name="username" value={fields.username} onChange={onChange} onBlur={onBlur} error={showError('username')} placeholder="john_doe99!" />
    <FormInput label="Email" type="email" name="email" value={fields.email} onChange={onChange} onBlur={onBlur} error={showError('email')} placeholder="example@gmail.com" />
    <FormInput label="Phone" name="phone" value={fields.phone} onChange={onChange} onBlur={onBlur} error={showError('phone')} placeholder="+91 9876543210" />
    <FormInput label="Password" type="password" name="password" value={fields.password} onChange={onChange} onBlur={onBlur} error={showError('password')} placeholder="Use letters, numbers & special" />
    <FormInput label="Confirm Password" type="password" name="confirm" value={fields.confirm} onChange={onChange} onBlur={onBlur} error={showError('confirm')} placeholder="Repeat password" />
    <div className="col-span-2">
      <Button type="submit" disabled={!allValid(errors)}>Sign Up</Button>
    </div>
  </div>
  <div className="helper">Already have an account? <Link to="/login">Login</Link></div>
</form>

      </div>
    </main>
  );
};

export default SignUp;
