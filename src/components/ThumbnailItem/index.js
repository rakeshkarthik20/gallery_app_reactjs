// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, updateItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesList

  const activeClass = isActive ? 'update-color' : ''

  const updateTheId = () => {
    updateItem(id)
  }
  return (
    <li className={`thumbnailContainer ${activeClass}`}>
      <button onClick={updateTheId} className="button" type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
