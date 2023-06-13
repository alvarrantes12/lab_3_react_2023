import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function New () {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [director_id, setDirector_id] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
          postFetch('movies', {name: name, year: year,  director_id: director_id})
            .then((response) => {
              
                setMessage('Creado con exito');

                setTimeout(() => {
                    navigate('/');
                }, 2000);

            })
        }catch(error){
          console.log(error);
        }
    }

    return(
        <>
            <h1 style={{ marginLeft: '10px', marginTop: '10px' }}>Crear Pelicula</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mx-4">
                    <div className="d-inline-block w-25">
                        <label>Nombre:</label>
                        <input 
                            autoFocus
                            className="form-control"
                            type = "text" 
                            value = {name} 
                            placeholder='Nuevo nombre de la pelicula' 
                            onChange={(e) => { setName(e.target.value); }} />
                        <br/>
                        <label>Año:</label>
                        <input 
                            autoFocus
                            className="form-control"
                            type = "text" 
                            value = {year} 
                            placeholder='Nuevo año de la pelicula' 
                            onChange={(e) => { setYear(e.target.value); }} />
                        <br/>
                        <label>Director:</label>
                        <input 
                            autoFocus
                            className="form-control"
                            type = "text" 
                            value = {director_id} 
                            placeholder='Nuevo Director ID ' 
                            onChange={(e) => { setDirector_id(e.target.value); }} />
                        <br/>
                        <div>{message ? <p>{message}</p> : <br />}</div>
                        <a className='btn btn-danger' href='/' style={{ display: 'inline-block', marginRight: '10px' }}>Volver al Menu</a>
                        <button  className='btn btn-primary' type= 'submit' style={{ display: 'inline-block', marginLeft: '10px' }}>Crear</button>
                    </div>          
                </div>
            </form>
        </>
    )
}

export default New;
