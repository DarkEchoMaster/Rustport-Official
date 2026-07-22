import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
export default function AdminRoute({children}){const {isAdmin,loading}=useAuth(); if(loading)return null; return isAdmin?children:<Navigate to="/" replace/>;}
