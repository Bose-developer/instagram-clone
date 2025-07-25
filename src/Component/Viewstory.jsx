import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Viewstory = () => {
  const [viewstory, setViewstory] = useState(null);
  const { id, tot } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const currentId = Number(id);
    const total = Number(tot);

    // Redirect if invalid ID
    if (currentId > total || currentId <= 0) {
      navigate('/');
      return;
    }

    // Fetch the current story
    fetch(`http://localhost:3000/story/${currentId}`)
      .then(res => res.json())
      .then(data => setViewstory(data))
      .catch(err => console.log(err));

    // Auto navigate after 20 seconds
    const timer = setTimeout(() => {
      const nextId = currentId + 1;
      if (nextId <= total) {
        navigate(`/story/${nextId}/${tot}`);
      } else {
        navigate('/');
      }
    }, 100000); 

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [id, tot, navigate]);

  return (
    <div>
      {viewstory ? (
        <div className='view-stories d-flex justify-content-center align-items-center bg-dark'>
          <Link to={`/story/${Number(id) - 1}/${tot}`}>
            <i className="bi bi-arrow-left-circle m-3"></i>
          </Link>

            
           <div className='story-image' >

            <img
            src={`/${viewstory.image}`}
            alt="story" 
            className='vh-100 img-fluid'
            
          />
          <div className="story-image-replay">
            <input type="text" className="story-input" placeholder="Replay to .." />
            <i class="bi bi-heart"></i>
            <i class="bi bi-send"></i>
          </div>
          </div>
          

          <Link to={`/story/${Number(id) + 1}/${tot}`}>
            <i className="bi bi-arrow-right-circle m-3"></i>
          </Link>

        
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Viewstory;
