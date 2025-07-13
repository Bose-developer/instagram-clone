import React from 'react';


const Sidebar = () => {
  return (
    <div className='m-3 position-fixed '>
      <div  className='d-flex flex-column gap-3 '>
        <img className='instagram-text-img' src="src/assets/Instagram-Text.png" alt="" />
        <div><i className="bi bi-house-door "></i> Home</div>
        <div><i className="bi bi-search"></i> Search</div>
        <div><i className="bi bi-compass"></i> Explore</div>
        <div><i className="bi bi-collection-play"></i> Reels</div>
        <div><i className="bi bi-chat-left-dots"></i> Messages</div>
        <div><i className="bi bi-heart"></i> Notification</div>
        <div><i className="bi bi-plus-square"></i> Create</div>
        <div><i className="bi bi-person-circle"></i> Profile</div>
      </div>
      <div  className='d-flex flex-column gap-3 position-fixed bottom-0 mb-3'>
        <div><i className="bi bi-threads"></i> Threads</div> 
        <div><i className="bi bi-three-dots"></i> More</div>
      </div>
    </div>
  );
};

export default Sidebar;
