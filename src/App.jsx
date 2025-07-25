import React from 'react';
import Sidebar from './Component/Sidebar';
import Suggestion from './Component/Suggestion';
import Feed from './Component/Feed';

const App = () => {
  return (
    <div className='container-md-fluid'>
      <div className='row vh-100'>
        <Sidebar className='col-md-1 col-xl-2 d-none d-md-block' position='position-fixed' />
        <Feed className='col-xl-7 col' />
        <Suggestion className='col-xl-3 d-none d-xl-block' />
      </div>
    </div>
  );
};

export default App;
