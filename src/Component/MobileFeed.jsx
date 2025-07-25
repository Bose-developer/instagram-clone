import React from 'react'

const MobileFeed = () => {
  return (
    <div className='d-md-none d-flex align-items-center p-2 px-5 position-relative top-0 w-100 bg-white'>
        <img src="src/assets/Instagram-Text.png"  style={{maxWidth:100,width:'100%',marginLeft:0}}/>
        <input type="text" placeholder='search' className='col-4 ms-auto' style={{borderRadius:10,padding:'5px 20px'}} />
        <p className='col-1 m-2'><i class="bi bi-heart "></i></p>
    </div>
  )
}

export default MobileFeed