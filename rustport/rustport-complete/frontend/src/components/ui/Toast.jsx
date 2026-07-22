import { FiX } from "react-icons/fi";
export default function Toast({message,type,onClose}){return <div className={`toast toast--${type}`}><span>{message}</span><button onClick={onClose}><FiX/></button></div>;}
