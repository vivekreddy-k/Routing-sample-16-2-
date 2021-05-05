// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, description, publishedDate} = item

  return (
    <div className="blog-item">
      <div className="blog-item-header">
        <h1 className="item-header-heading">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </div>
  )
}

export default BlogItem
