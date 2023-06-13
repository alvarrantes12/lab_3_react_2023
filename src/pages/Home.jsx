import React, { useState, useEffect } from 'react';
import { deleteFetch, postFetch, putFetch } from '../commons/ApiMethods';
import Index from '../components/Media_Contents/index'
import New from '../components/Media_Contents/new'
import Edit from '../components/Media_Contents/edit'
import Delete from '../components/Media_Contents/delete';
function Home() {

  const [refresh, setRefresh] = useState(true)

  


  return (
    <div className=''>
      <Index refresh={refresh} setRefresh={setRefresh} />
      <New setRefresh={setRefresh}/>
      <Edit setRefresh={setRefresh}/>
      <Delete setRefresh={setRefresh}/>
      
    </div>
  );   
}

export default Home;