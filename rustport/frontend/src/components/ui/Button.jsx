export default function Button({ as: Tag="button", variant="primary", className="", children, ...props }) {
  return <Tag className={`button button--${variant} ${className}`.trim()} {...props}>{children}</Tag>;
}
