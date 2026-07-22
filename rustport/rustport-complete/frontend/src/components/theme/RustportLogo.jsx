import { Link } from "react-router-dom";
export default function RustportLogo(){
  return <Link className="brand" to="/"><svg className="brand__mark" viewBox="0 0 48 48"><path d="M27 3c2 10-8 11-8 21 0 4 2 7 5 9-1-7 8-9 7-17 7 5 11 11 11 18 0 8-7 14-17 14S7 42 7 33c0-8 6-14 12-20 1 7 5 8 8-10Z"/></svg><span>Rustport</span></Link>;
}
