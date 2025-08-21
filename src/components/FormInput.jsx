import React from 'react';

const FormInput = ({ label, type='text', name, value, onChange, onBlur, error, placeholder, className='' }) => {
  return (
    <div className={`input ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete="off"
      />
      <div className="error">{error || ''}</div>
    </div>
  );
};

export default FormInput;
