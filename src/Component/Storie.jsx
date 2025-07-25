import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Stories = () => {
  const [users, setUsers] = useState([]);
  const nagivate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);



   let tot = 0;
  
  return (
    <div className='bg-white p-2  rounded d-flex justify-content-center overflow-auto mb-3 story-section'>
      <div className='d-none'>{tot=users.length}</div>
      {users.map(user => (
        <div onClick={() => nagivate(`/story/${user.id}/${tot}`)} >
        <div key={user.id} id= {user.id}className='text-center mx-2 story'>
          <img src={user.profilePicture} alt={user.username} className='rounded-circle story-img' style={{ width: '80px', height: '80px', objectFit: 'cover' }}
          />
        </div>
          <p className='small text-truncate m' style={{ width: '50px' }}>{user.username}</p>  
        </div>
      ))}
    </div>
  );
};

export default Stories;
