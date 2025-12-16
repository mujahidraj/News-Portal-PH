
import userIcon from "../../assets/user.png"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { use } from "react";
const Navbar = () => {
  const {user , signOutUser} = use(AuthContext)
console.log(user);

  

  const handleSignOut =()=>{
    signOutUser().then(() => {
      alert("Log out Successful.");
      
    }).catch(() => {
      alert("Something wrong.")
      
    });
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <p className="text-lg font-semibold text-red-700 italic"> {user && user.displayName}</p>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
      </ul>
    </div>
    
  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-semibold px-1">
      <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end flex flex-row gap-4">
    <img className="w-10 rounded-full" src={user? user.photoURL : userIcon} alt="" />
   
    { user ? <button onClick={handleSignOut} className="btn bg-black text-white">Log out</button> : <Link to='/auth/login' className="btn bg-black text-white">
    Login</Link>
      
    }
  </div>
</div>
  );
};

export default Navbar;