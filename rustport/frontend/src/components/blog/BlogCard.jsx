import {Link} from "react-router-dom"; import {formatDate} from "../../utils/formatters";
export default function BlogCard({post}){return <article className="blog-card"><img src={post.featuredImage} alt=""/><div><time>{formatDate(post.publishedAt)}</time><h3>{post.title}</h3><p>{post.excerpt}</p><Link to={`/blog/${post.slug}`}>Read more</Link></div></article>;}
