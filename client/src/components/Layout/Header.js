import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useAuth } from '../../Context/auth'
import { toast } from "react-toastify";
const Header = () => {
  const [auth,setAuth]=useAuth();
  const handleLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:'',
    })
    localStorage.removeItem('auth');
    toast.success("Logout Sucessfully")
  }
 
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand">🛒 Ecommerce App</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <NavLink to="/" className="nav-link" >Home </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink to="/category" className="nav-link" >Category </NavLink>
      </li>
      {
        !auth.user ? (<>
          <li className="nav-item">
        <NavLink to="/register" className="nav-link" >Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login" className="nav-link" >Login</NavLink>
      </li>
        </>) : (<>
         
        <li className="nav-item dropdown">
  <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {auth?.user?.name}
  </NavLink>
  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    <NavLink to={`/dashboard/${auth?.user?.role==1 ? 'admin':'user'}`} className="dropdown-item" >Dashboard</NavLink>
    <NavLink onClick={handleLogout} to="/login" className="dropdown-item" >Logout</NavLink>
  </div>
</li>


      
        </>)
      }
      <li className="nav-item">
        <NavLink to="/cart" className="nav-link" >Cart{0}</NavLink>
      </li>
      
      
    </ul>
  
  </div>
</nav>

    </>
  )
}

export default Header