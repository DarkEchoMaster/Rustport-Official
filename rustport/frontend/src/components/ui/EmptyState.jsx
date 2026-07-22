import { FiInbox } from "react-icons/fi";
export default function EmptyState({title="Nothing here yet",text="Check back soon."}) {
  return <div className="empty-state"><FiInbox size={32}/><h3>{title}</h3><p>{text}</p></div>;
}
