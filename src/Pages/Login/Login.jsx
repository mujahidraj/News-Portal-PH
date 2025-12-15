import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-center text-2xl font-bold'>Login your account</h2>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className='my-3 text-center'>Dont't have an account? <Link className='text-blue-500 underline' to='/auth/register'>Please register</Link></p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;