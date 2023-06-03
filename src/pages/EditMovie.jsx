import React, { useState } from 'react';
import Edit from '../components/Movies/edit';

function EditMovie() {
  const [refresh, setRefresh] = useState(true);
  return (
    <div>
      <Edit setRefresh={setRefresh} />
    </div>
  );
};

export default EditMovie;