import React, { useState } from 'react';
import Index from '../components/Movies/index';
import NewMovie from '../components/Movies/new';
import EditMovie from '../components/Movies/edit';
import DeleteMovie from '../components/Movies/delete';

function Home() {
  const [refresh, setRefresh] = useState(true);
  return (
    <div className="">
      <Index refresh={refresh} setRefresh={setRefresh} />

      <NewMovie setRefresh={setRefresh} />
      <EditMovie setRefresh={setRefresh} />
      <DeleteMovie setRefresh={setRefresh} />
    </div>
  );
}

export default Home;

