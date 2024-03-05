import './Login.css'
import React from 'react'
import  { useState } from 'react';


function Login() {
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => {
    setShowMessage(true);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Proceed with registration
    console.log("Form submitted:", formData);
  };
  return (
    <>
    <div >
    {showMessage && <div className='text-success'>Successfully Registered</div>}
      <form onSubmit={handleSubmit} className='searchBar'>
        <label className='p-2'>
          Name:
          <input className='input  border rounded'
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label className='p-2'>
          Email:
          <input className='input  border rounded'
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label className='p-2'>
          Password:
          <input className='input  border rounded'
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label className='p-2'>
          Confirm Password:
          <input className='input  border rounded'
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <button className='button btn btn-success d-flex justify-content-center align-items-center' onClick={handleClick} type="submit">Register</button>
        
      </form>
    </div>
    </>
  )
}

export default Login