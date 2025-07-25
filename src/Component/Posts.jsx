import React, { useEffect, useState } from 'react'

const Posts = ({props}) => {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        Promise.all([
         fetch('http://localhost:3000/posts').then((res) => res.json()),
         fetch('http://localhost:3000/users').then((res) => res.json()),
         fetch('http://localhost:3000/comments').then((res) => res.json())
        ])
        .then(([postData, userData, commentsData]) => {
            setPosts(postData);
            setUsers(userData);
            setComments(commentsData);
        })
        .catch(err => console.log(err)
        )
    },[])

  return (
    <div className='d-flex justify-content-center'>
         {posts.length > 0 ? (
            <div className='profile d-flex flex-column gap-3 w-75'>
                {posts.map((post) =>{
                    
                    const user = users.find(u => u.id == post.userId);
                    const postComments = comments.find(c => c.userId === post.userId);
                     
                    return (
                      <div style={{borderBottom:'1px solid #00000070'}} key={post.id} >  

                       <div className='d-flex align-items-center py-3'  >
                         <img className='profile-pic rounded-circle me-2' src={user.profilePicture} alt="profile-image" />
                         <h5>{user.username}</h5>
                       </div>

                        {/* post */}
                       <img src={post.image} alt="post" style={{width:'100%',border:'1px solid #00000020',borderRadius:5}}/>

                       <div className="icons d-flex gap-2 mt-2">
                        <i className="bi bi-heart"></i> 
                        <i className="bi bi-chat-left-dots"></i>
                        <i class="bi bi-send"></i>
                        <i class="bi bi-bookmark ms-auto  "></i>
                       </div>
                        <p className='mb-0' style={{fontSize:12}}><b>{post.likes}</b> Likes</p>
                        <p>{postComments.text}</p>
                       </div>
                );
                })}
                    
            </div>
         ) : (
            <div>
                Loading Post ....
            </div>
         ) 
        }
    </div>
  )
}

export default Posts