import React from 'react';
import { FcGoogle } from "react-icons/fc";

import { FaGithubSquare } from "react-icons/fa";


const SocialLogin = () => {
  return (
    <div>
      <h2 className='font-semibold text-lg '>Login With</h2>
      <div className='flex flex-col gap-3 my-3'>
        {/* Google */}
        <button className="btn bg-white text-black w-11/12 border-[#e5e5e5]">
       <FcGoogle size={24} />

          Login with Google
        </button>
        {/* GitHub */}
        <button className="btn bg-black text-white w-11/12 border-black">
         <FaGithubSquare size={24}/>

          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;