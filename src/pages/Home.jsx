import React, { useState} from 'react';
import Index from '../components/Movies/index'
import New from '../components/Movies/new'
import Edit from '../components/Movies/edit'
import Delete from '../components/Movies/delete'


function Home() {

  const [refresh, setRefresh] = useState(true);

  return (
    <div className=''>

      <div style={{ display: 'flex' }}>
      <New setRefresh={setRefresh} />
      <div style={{ marginLeft: '40px' }}></div> {/* Espacio entre los componentes */}
      <Edit setRefresh={setRefresh} />
      <div style={{ marginLeft: '40px' }}></div> {/* Espaciado */}
      <Delete setRefresh={setRefresh} />
      </div>
      
      <div style={{ marginBottom: '40px' }}></div> {/* Espaciado */}
      <Index refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
}

export default Home;