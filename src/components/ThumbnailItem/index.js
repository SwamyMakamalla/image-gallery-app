// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, onImageChange, activeClass} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachItem

  const opacityClass = activeClass ? 'remove-opacity' : ''

  const onScreenImage = () => {
    onImageChange(id)
  }
  return (
    <li className="thumbnail-item">
      <button type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumb-image ${opacityClass}`}
          onClick={onScreenImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
