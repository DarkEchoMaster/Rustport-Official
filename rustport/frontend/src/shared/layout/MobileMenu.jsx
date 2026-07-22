import { NavLink } from "react-router-dom"; import { FiX } from "react-icons/fi";
export default function MobileMenu({open,onClose,links}){if(!open)return null;return <div className="mobile-menu"><button onClick={onClose}><FiX/></button>{links.map(([to,label])=><NavLink onClick={onClose} key={to} to={to}>{label}</NavLink>)}</div>;}
