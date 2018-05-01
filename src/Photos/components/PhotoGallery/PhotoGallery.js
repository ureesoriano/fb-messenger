import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

function PhotoGallery({ photos, match }) {
  console.log(match)
  return (
    <div>
      {photos.map(photo => (
        <Link key={photo.id} to={`${match.url}/${photo.id}`}>
          <img src={photo.thumbnailUrl} />
        </Link>
      ))}
    </div>
  )
}

export default withRouter(PhotoGallery)
