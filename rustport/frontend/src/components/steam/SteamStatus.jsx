export default function SteamStatus({online=false}){return <span className={`steam-status ${online?"is-online":""}`}>{online?"Online":"Offline"}</span>;}
