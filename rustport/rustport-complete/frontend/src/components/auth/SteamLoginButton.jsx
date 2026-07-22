import { FaSteam } from "react-icons/fa";
import { steamLoginUrl } from "../../api/authApi";
import Button from "../ui/Button";
export default function SteamLoginButton(){return <Button as="a" href={steamLoginUrl}><FaSteam/> Sign in with Steam</Button>;}
