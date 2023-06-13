import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Index from '../components/movies/index';

function Home() {
    const [refresh, setRefresh] = useState(true);
    return (
        <div>
            <Index refresh={refresh} setRefresh={setRefresh} />

            <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
                <Link to="/create">
                    <button style={{
                        borderRadius: "4px",
                        backgroundColor: "#00C851",
                        padding: '15px 15px',
                        border: "none",
                        fontWeight: "bold"
                    }}>Crear</button>
                </Link>

                <Link to="/edit">
                    <button style={{
                        borderRadius: "4px",
                        backgroundColor: "lightblue",
                        padding: '15px 15px',
                        border: "none",
                        fontWeight: "bold"
                    }}>Editar</button>
                </Link>

                <Link to="/delete">
                    <button style={{
                        borderRadius: "4px",
                        backgroundColor: "#FF4D4D",
                        padding: '15px 15px',
                        border: "none",
                        fontWeight: "bold"
                    }}>Eliminar</button>
                </Link>
            </div>

        </div>
    );
}

export default Home;
