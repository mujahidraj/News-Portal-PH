import React, { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [user , setUser] = useState({
    name:"raj",
    email: "mujahidraj@gmail.com"
  })

  const authData = {
    user , setUser
  }


  return (
    <div>
      <AuthContext value={authData}>
        {children}
      </AuthContext>
    </div>
  );
};

export default AuthProvider;