import { deleteFetch } from '../../commons/ApiMethods';
import Swal from 'sweetalert2';

function Delete({ setRefresh, idDelete }) {

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      deleteFetch(`movies/${idDelete}`).then(() => {
        showSuccessAlert();
        setRefresh(true);
      });
    } catch (error) {
      console.log(error);
    }
  }

  const showSuccessAlert = () => {
    Swal.fire({
      title: 'Eliminado correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }

  return (
    <>
      <form onSubmit={handleDelete}>
        <button type='submit' className="btn btn-danger">Eliminar</button>
      </form>
    </>
  )
}

export default Delete;
