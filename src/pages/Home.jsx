import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Index from '../components/Movies/index';

function Home() {
  const [refresh, setRefresh] = useState(true);
  return (
    <div>
      <Index refresh={refresh} setRefresh={setRefresh} />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <Link to="/create" style={{ textDecoration: 'none' }}>
          <button
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Crear
          </button>
        </Link>
        <Link to="/edit" style={{ textDecoration: 'none' }}>
          <button
            style={{
              backgroundColor: '#2196F3',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Editar
          </button>
        </Link>
        <Link to="/delete" style={{ textDecoration: 'none' }}>
          <button
            style={{
              backgroundColor: '#f44336',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Borrar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

// <New setRefresh={setRefresh}/>

//       <Edit setRefresh={setRefresh}/>

//       <Delete setRefresh={setRefresh}/>