import { useState, createContext } from 'react';

export const loginButtonContext = createContext();

export default function LoginButtonProvider(props) {

  const [user, setUser] = useState("");
  const [isAdmin, setIsAdmin] = useState()

  
  function loginUser() {
    setUser("user")
    setIsAdmin(false)
  }

  function loginAdmin() {
    setUser("admin")
    setIsAdmin(true)
  }

  function logout() {
    setUser("")
    setIsAdmin(null)
  }

  const value = {
    user,
    isAdmin,
    loginAdmin,
    loginUser,
    logout
  };

  return (
    <loginButtonContext.Provider value={value}>
      {props.children}
    </loginButtonContext.Provider>
  );
} 