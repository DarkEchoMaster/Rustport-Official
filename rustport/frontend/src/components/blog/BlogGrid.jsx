import BlogCard from "./BlogCard"; export default function BlogGrid({posts=[]}){return <div className="blog-grid">{posts.map(p=><BlogCard key={p.id} post={p}/>)}</div>;}
