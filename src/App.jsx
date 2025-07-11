import React from 'react'
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className='d-flex vh-100'>
     <div className='w-20'><Sidebar/></div>
     <div className='w-50 bg-info'>feed</div>
     <div>suggestion</div>

    </div>
  )
};

export default App;