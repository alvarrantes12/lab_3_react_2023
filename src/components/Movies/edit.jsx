import React, { useState, useEffect  } from 'react';
import { putFetch, getFetch } from '../../commons/ApiMethods';
import { useNavigate, useParams  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Edit () {
    
    const { id } = useParams();

    const [idEdit, setIdEdit] = useState('');
    const [nameEdit, setNameEdit] = useState('');
    const [yearEdit, setYearEdit] = useState('');
    const [director_idEdit, setDirector_idEdit] = useState('');
    
    const [messageEdit, setMessageEdit] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        try {
          getFetch(`movies/${id}`).then((data) => {
            setIdEdit(data.movie.id);
            setNameEdit(data.movie.name);
            setYearEdit(data.movie.year);
            setDirector_idEdit(data.movie.director.id);
          });
        } catch (error) {
          console.log(error);
        }
    }, [id]);

    const handleEdit = async (event) =>{
        event.preventDefault();
        try{
        await putFetch(`movies/${idEdit}`, {name: nameEdit , year: yearEdit,  director_id: director_idEdit})
        .then(() => {
            setMessageEdit('Editado correctamente');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        })
        }catch(error){
        console.log(error)
        }
    }

    return(
        <>
            <h1 style={{ marginLeft: '10px', marginTop: '10px' }}>Editar Pelicula</h1>
            <form onSubmit={handleEdit}>
                <div className="form-group mx-4">
                    <div className="d-inline-block w-25">
                        <label>Nombre:</label>
                        <input 
                            autoFocus
                            className="form-control"
                            type = "text" 
                            value = {nameEdit} 
                            placeholder='Nuevo nombre de la pelicula' 
                            onChange={(e) => { setNameEdit(e.target.value); }} />
                        <br/>
                        <label>Año:</label>
                        <input 
                            autoFocus
                            className="form-control"
                            type = "text" 
                            value = {yearEdit} 
                            placeholder='Nuevo año de la pelicula' 
                            onChange={(e) => { setYearEdit(e.target.value); }} />
                        <br/>
                        <label>Director:</label>
                        <input 
                            autoFocus
                            className="form-control"
                            type = "text" 
                            value = {director_idEdit} 
                            placeholder='Nuevo Director ID ' 
                            onChange={(e) => { setDirector_idEdit(e.target.value); }} />
                        <br/>
                        <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
                        <a className='btn btn-danger' href='/' style={{ display: 'inline-block', marginRight: '10px' }}>Volver al Menu</a>
                        <button className='btn btn-success' type= 'submit' style={{ display: 'inline-block', marginLeft: '10px' }}>Editar</button>
                    </div>          
                </div>
            </form>
      </>
    )
}

export default Edit;