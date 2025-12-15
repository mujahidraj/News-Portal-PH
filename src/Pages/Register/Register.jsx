import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className="bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-center text-2xl font-bold'>Register Account</h2>
        <fieldset className="fieldset">
          <label className="label">name</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className='my-3 text-center'>Already have an account? <Link className='text-blue-500 underline' to='/auth/login'>Please Sign in</Link></p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Register;