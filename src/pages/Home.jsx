import React, { useState } from "react";
import Index from '../components/movies/index';
import New from '../components/movies/new';
import Edit from '../components/movies/edit';
import Delete from '../components/movies/delete';

function Home() {
  const [refresh, setRefresh] = useState(true)
  
  return (
    <div>
      <Index refresh={refresh} setRefresh={setRefresh}/>
      <New setRefresh={setRefresh}/>
      <Edit setRefresh={setRefresh}/>
      <Delete setRefresh={setRefresh}/>
    </div>
  )
}

export default Home;