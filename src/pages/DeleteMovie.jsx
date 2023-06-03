import React, { useState } from 'react';
import Delete from '../components/Movies/delete';

function DeleteMovie() {
  const [refresh, setRefresh] = useState(true);
  return (
    <div>
        <Delete setRefresh={setRefresh}/>
    </div>
  );
};

export default DeleteMovie;