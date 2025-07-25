import React, { useEffect, useState } from 'react'

const Suggestion = ({className}) => {
 
   const [profile, setprofile] = useState([]);
   const [suggestions, setSuggestions] = useState([]);
  

   const toggleFollow = (id) => {
    setSuggestions(prev => prev.map(item => 
      item.id === id ? {...item, isFollowing : !item.isFollowing} : item
    ));
   }

   useEffect(() => {
    Promise.all([
      fetch('http://localhost:3000/profile').then((res) => res.json()),
      fetch('http://localhost:3000/suggestions').then((res) => res.json())
    ])
    .then(([profileData, suggestionsData]) => {
        setprofile(profileData);
        setSuggestions(suggestionsData);
    }) 
    .catch(err => console.log(err))
   },[]);

  return (
  <div className={`${className}`}>
     {profile.length > 0 ? (
      <div className='userProfile border  ms-0'>
        {profile.map((user) => (
          <div  key={user.id} className='comman'>
               <img className='profile-pic rounded-circle me-2' src={user.profilePicture} alt="profile-image" />
               <h5 style={{fontSize:18}}>{user.username}</h5>
               <h6 className='ms-auto text-primary' style={{fontSize:14}} >switch</h6>
          </div>
        ))}
          <div className='comman color'>
             <h5 style={{fontSize:12}}>Suggest for you</h5>
             <h6 className='ms-auto' style={{fontSize:12}}>See All</h6>
          </div>
          {suggestions.map((suggestion) => (
          <div  key={suggestion.id} className='comman'>
               <img className='profile-pic rounded-circle me-2' src={suggestion.profilePicture} alt="profile-image" />
               <h5 style={{fontSize:18}}>{suggestion.username}<br/>
                 <p style={{fontSize:8,color:'#00000096',margin:0}} >{suggestion.reason}</p>
               </h5>
               <h6 className='ms-auto text-primary' style={{fontSize:14,cursor:'pointer'}} onClick={()=>toggleFollow(suggestion.id)}>
                {suggestion.isFollowing ? 'unfollow' : 'Follow'}
                </h6>
          </div>
        ))}

           
      </div>
       
     ):(
      <div>
        loading..
      </div>
     )}
  </div>
  )
}

export default Suggestion;