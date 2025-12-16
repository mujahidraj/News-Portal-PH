import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const [error , setError] = useState('')
  const {loginUser } = use(AuthContext)
  const location = useLocation()
  const Navigate = useNavigate()
  const handleLogin =(e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser (email,password).then(result=>{
     alert ("login Success")
     console.log(result);
     Navigate(`${location.state ? location.state : '/'}`)
    }).catch(error=>{
      setError(error.code)
    })
  }

  return (
    <div className="bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-center text-2xl font-bold'>Login your account</h2>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" required/>
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        {
          error && <p className='text-red-600 text-sm font-medium'>{error}</p>
        }
        <p className='my-3 text-center'>Dont't have an account? <Link className='text-blue-500 underline' to='/auth/register'>Please register</Link></p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;