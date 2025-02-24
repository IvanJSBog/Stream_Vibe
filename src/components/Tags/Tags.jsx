import "./Tags.scss"

const Tags = (props) => {
  const { items = [] } = props
  return (
    <div className="tags">
      <ul className="tags__list">
        {items.map((tag, i) => (
          <li className="tags__item" key={i}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags
