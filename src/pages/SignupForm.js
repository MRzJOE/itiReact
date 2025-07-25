import React, { useState } from 'react';
import logo from'../assets/logo.svg'
function SignupForm({ onSignup }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    city: '',
    postCode: '',
    country: '',
    region: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(form);
  };

  return (
    <form onSubmit={handleSubmit} className="formcontent">
        <img src={logo}/>
      <div className='upper'>
        <div className='left'>
             <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
             <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        </div>
        <div className='right'>
             <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
             <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
        </div>
      </div>
      <div className='fullwidth'>
        <input  type='password' name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      </div>
      <div className='lower'>
        <div className='left'>
             <input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
             <input name="country" placeholder="Country" value={form.country} onChange={handleChange} required />
        </div>
        <div className='right'>
             <input name="region" placeholder="Region/State" value={form.region} onChange={handleChange} required />
             <input name="postCode" placeholder="Post Code" value={form.postCode} onChange={handleChange} required />
        </div>
      </div>
      <div className='submitButton'>
        <button type="submit">Signup</button>
      </div>
    </form>
  );
}

export default SignupForm;

