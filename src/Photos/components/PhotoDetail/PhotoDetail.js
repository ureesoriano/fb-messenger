import React from 'react'
import { Link } from 'react-router-dom'

function PhotoDetail({ photo }) {
  return (
    <div>
      <div style={{ padding: 20 }}>
        <Link to="/photos">go to Gallery</Link>
      </div>
      <img src={photo.url} />
    </div>
  )
}

export default PhotoDetail
