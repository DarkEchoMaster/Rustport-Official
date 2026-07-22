import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
export default function Pagination({page=1,pageCount=1,onChange}) {
  if(pageCount<=1) return null;
  return <nav className="pagination"><button disabled={page<=1} onClick={()=>onChange(page-1)}><FiChevronLeft/> Previous</button><span>Page {page} of {pageCount}</span><button disabled={page>=pageCount} onClick={()=>onChange(page+1)}>Next <FiChevronRight/></button></nav>;
}
