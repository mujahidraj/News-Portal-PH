import React, { use, useState} from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { Eye, EyeOffIcon } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate()
  const {createUser ,loading , userUpdate,user , setUser}= use(AuthContext)
  const [passwordErr , setPasswordErr] = useState('');
  const [show , setShow] = useState(false)
  
  if(loading){
    return <span className="loading loading-bars loading-xs"></span>

  }
  

  const handleOnSubmit =(event)=>{
    event.preventDefault()
    const name = event.target.name.value;
    const photoUrl = event.target.photoUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(regexPassword.test(password) === false){
      return setPasswordErr("Password must be 8 to 32 character, one uppercase , one lowercase , one special character and one number . Password must be stronger then prappo .")
    }
    else{
      setPasswordErr('')
    }

    createUser(email,password)
    .then(result=>
      userUpdate({displayName : name , photoURL : photoUrl})
      .then(()=>{
        setUser({...user,displayName : name , photoURL : photoUrl})
        navigate('/')
      })
      .catch((error)=>{
        setUser(result.user)
        error.code
        
        
      })
    )
      

    .catch(error=>
      error.code
    )
    

  }
  const handleShow =()=>{
    setShow(true)
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
          <div className='flex relative'>
            <input type={show ? "text" : "password"} className="input" name='password' required placeholder="Password" />
            <button onClick={handleShow} className='absolute -right-3 top-2'>{show ? <Eye></Eye> : <EyeOffIcon></EyeOffIcon>}</button>
          </div>
          
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </form>
        {
          passwordErr && <p className='text-red-600 text-sm'>{passwordErr}</p>
        }
        <p className='my-3 text-center'>Already have an account? <Link className='text-blue-500 underline' to='/auth/login'>Please Sign in</Link></p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Register;