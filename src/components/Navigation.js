import React, { useContext } from "react";
import "./Navigation.scss"
import { Link } from "react-router-dom";
import { loginButtonContext } from "../providers/LoginButtonProvider";

export default function Navigation() {

  const { user, loginUser, loginAdmin, logout } = useContext(loginButtonContext);

  return (
    <nav>
      <div className="nav--project-name">
      <Link to='/'>GyManager</Link>
      </div>
      <div className="nav-bar">

        <ul className="nav-bar-left">
          <li><Link to='/'>Gym Capacity</Link></li>
          <li><Link to='/book'>Book</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
        <div className="nav-bar-right">
        { user === "" && <div className="login-register">
          <button onClick={()=> loginUser()}>User Login</button> 
          <button onClick={()=> loginAdmin()}>Admin Login</button>
          </div>
        }
        { user !== "" && <div className="login-logout">
            <label>{user}</label>
            <button onClick={() => logout()}>Logout</button>
          </div>
        }
        </div>
      </div>
    </nav>
  );
}