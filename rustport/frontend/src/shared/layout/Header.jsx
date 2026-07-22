import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import RustportLogo from "../../components/theme/RustportLogo";
import SteamLoginButton from "../../components/auth/SteamLoginButton";
import ProfileDropdown from "../../components/auth/ProfileDropdown";
import MobileMenu from "./MobileMenu";
import useAuth from "../../hooks/useAuth";
const links=[["/","Home"],["/servers","Servers"],["/blog","Blog"],["/pricing","Pricing"],["/about","About"],["/contact","Contact"]];
export default function Header(){
  const [open,setOpen]=useState(false); const {user}=useAuth();
  return <header className="site-header"><div className="container site-header__inner"><RustportLogo/><nav className="desktop-nav">{links.map(([to,label])=><NavLink key={to} to={to}>{label}</NavLink>)}</nav><div className="site-header__actions"><a className="button button--ghost buy-rust" href="https://store.steampowered.com/app/252490/Rust/" target="_blank" rel="noreferrer"><FiShoppingCart/> Buy Rust</a>{user?<ProfileDropdown/>:<SteamLoginButton/>}<button className="menu-button" onClick={()=>setOpen(true)}><FiMenu/></button></div></div><MobileMenu open={open} onClose={()=>setOpen(false)} links={links}/></header>;
}
