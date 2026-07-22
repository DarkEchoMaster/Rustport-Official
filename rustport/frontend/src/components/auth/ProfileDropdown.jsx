import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiLogOut, FiServer, FiShield } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
export default function ProfileDropdown(){
  const [open,setOpen]=useState(false); const {user,isAdmin,logout}=useAuth();
  return <div className="profile-menu"><button className="profile-menu__trigger" onClick={()=>setOpen(!open)}><img src={user.avatar} alt=""/><span>{user.displayName}</span><FiChevronDown/></button>{open&&<div className="profile-menu__panel">{isAdmin&&<Link to="/admin"><FiShield/> Admin Panel</Link>}<Link to="/my-servers"><FiServer/> My Servers</Link><button onClick={logout}><FiLogOut/> Logout</button></div>}</div>;
}
