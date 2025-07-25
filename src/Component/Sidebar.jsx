import React, { useEffect, useState } from 'react';


const Sidebar = ({className, position}) => {

   const [sidebar, setSidebar] = useState([]);

   useEffect(()=>{
    fetch('http://localhost:3000/sidebar')
    .then((res) => res.json())
    .then(data => setSidebar(data))
    .catch((err) => console.log(err))
   },[])

  return (
      <div className={`${className} `} style={{borderRight: '1px solid #00000038'}}>
       {sidebar.length > 0  ? (
            <div className={`d-flex justify-content-between flex-column vh-100 m-3 py-3 ${position}`}>
              <img className='instagram-text-img d-none d-xl-block' style={{maxWidth:100}} src="src/assets/Instagram-Text.png" alt="" />
              <img className='instagram-text-img d-none d-md-block  d-xl-none py-4' src="src/assets/Instagram.svg" alt="" />
           <div>
            {sidebar.slice(0, -2).map((data, index) => (
                  <div className='d-flex align-items-center' key={index}>
                    <i className={`${data.iconClass} sidebar-icon pb-3`}></i>
                    <p className='d-none d-xl-block p-0'>{data.label}</p>
                  </div>
                ))}
            </div>
            <div className='mt-auto d-none d-md-block'>
              {sidebar.slice(-2).map((data, index) => (
                  <div className='d-flex ' key={`last-${index}`}>
                    <i className={`${data.iconClass} me-2 pb-3`}></i>
                    <p className='d-none d-xl-block p-0'>{data.label}</p>
                  </div>
              ))}  
            </div>
           </div> 
       ):(
        <p>Loading...</p>
       )}
      </div>
  );
};

export default Sidebar;
