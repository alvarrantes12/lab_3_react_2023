import React, { useState } from 'react';
import Index from '../components/Movies/index';
import New from '../components/Movies/new';
import Edit from '../components/Movies/edit';
import Delete from '../components/Movies/delete';

function Home() {
    const [refresh, setRefresh] = useState(true)

    return (
        <div className=''>
            <Index refresh={refresh} setRefresh={setRefresh}/>

            <New setRefresh={setRefresh} />

            <Edit setRefresh={setRefresh} />

            <Delete setRefresh={setRefresh} />
        </div>
    );
}

export default Home;