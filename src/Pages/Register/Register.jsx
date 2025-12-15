import React, { use} from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

  const {createUser ,loading}= use(AuthContext)

  if(loading){
    return <span className="loading loading-bars loading-xs"></span>

  }
  

  const handleOnSubmit =(event)=>{
    event.preventDefault()
    const name = event.target.name.value;
    const photoUrl = event.target.photoUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(name , email, photoUrl , password);

    createUser(email,password).then(result=>console.log(result.user)).catch(error=>console.log(error.code)
    )
    

  }

  return (
    <div className="bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-center text-2xl font-bold'>Register Account</h2>
        <form onSubmit={handleOnSubmit} className="fieldset">
          <label className="label">name</label>
          <input type="text" className="input" name='name' placeholder="Name" required/>
          <label className="label">Photo URL</label>
          <input type="text" className="input" name='photoUrl' required placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input" name='email' required placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' required placeholder="Password" />
          
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className='my-3 text-center'>Already have an account? <Link className='text-blue-500 underline' to='/auth/login'>Please Sign in</Link></p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Register;