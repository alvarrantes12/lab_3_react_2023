import React, { useState } from 'react';
import New from '../components/movies/new';

function CreateMovie() {
    const [refresh, setRefresh] = useState(true);
    return (
        <div>
            <New setRefresh={setRefresh} />
        </div>
    );
}

export default CreateMovie;