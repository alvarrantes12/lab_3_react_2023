import React, { useState } from 'react';
import Index from '../components/Movies/index';


function Home() {

  const [refresh, setRefresh] = useState(true);

  return (
    <div className=''>
      <Index refresh ={refresh} setRefresh={setRefresh}/>
    </div>
    );
}

export default Home;