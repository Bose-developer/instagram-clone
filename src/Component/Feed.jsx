import React from 'react'
import Storie from './Storie'
import Posts from './Posts'
import MobileFeed from './MobileFeed'


const Feed = ({className}) => {
  return (
    <div className={className}>
      <MobileFeed/>
      <Storie/>
      <Posts/>
    </div>
  )
}

export default Feed