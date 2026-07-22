export default function SteamAvatar({user,size=42}){return <img className="steam-avatar" src={user?.avatar} alt={user?.displayName||"Steam profile"} width={size} height={size}/>;}
