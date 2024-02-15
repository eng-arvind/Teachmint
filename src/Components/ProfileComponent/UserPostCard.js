import React from 'react'
import './UserProfile.css'

function UserPostCard({id, posts, openContentModel}) {
  return (
    <button className='card post-details col-md-4 col-sm-6' onClick={() => openContentModel(posts)}>
        <h5>{posts.title}</h5>
        <h6>{posts.body}</h6>
    </button>
  )
}

export default UserPostCard