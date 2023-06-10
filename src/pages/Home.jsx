import React, { useState } from 'react';
import Index from '../components/Movies/index';
import New from '../components/Movies/new';
import Edit from '../components/Movies/edit';
import Delete from '../components/Movies/delete';
import './Home.css';

function Home() {
  const [refresh, setRefresh] = useState(true)

  return(
    <div>
        <Index refresh={refresh} setRefresh={setRefresh}/>
        <div className='actions'>
          <New setRefresh={setRefresh}/>
          <Edit setRefresh={setRefresh}/>
          <Delete setRefresh={setRefresh}/>
        </div>

    </div>
  );

}

  

export default Home;