import React, { useEffect, useState } from 'react';
import { Link, useParams,useNavigate, Navigate } from 'react-router-dom';

const Viewstory = () => {
  const [viewstory, setViewstory] = useState(null);
  const { id, tot } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then(res => res.json())
      .then(data => setViewstory(data))
      .catch(err => console.log(err));
  }, [id]);

   if(id > tot || id <= 0){
    navigate('/'); 
   }

  return (
    <div>
      {viewstory ? (
        <div className='d-flex justify-content-center align-items-center '>
          <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i class="bi bi-arrow-left-circle m-3"></i></Link>
          <img src={`/${viewstory.image}`} alt="story" className='vh-100 py-5' style={{width:'30%'}}/>
          <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-circle m-3"></i></Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Viewstory;
