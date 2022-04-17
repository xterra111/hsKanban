import React from 'react'
import { Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

const DeleteTask = () => {

   const {header, columnId, taskId, successCallBack} = this.props;

    const deleteTaskCard = ( e ) => {
        e.preventDefault();
        console.log( `Deleting task card ${taskId}` );
        axios.delete( "http://localhost:8000/api/edit/" + ID, refreshedData )
            .then( ( res ) => {
                console.log( res.data );
                successCallBack();
            } )
            .catch( ( err ) => {
                console.log( err );
            } );
        
  return (
      <button startIcon={<DeleteIcon />}
          variant="contained"
          color="secondary"
          style={{
                backgroundColor: '#ff0000',
                borderRadius: '50%',
                padding: '5px',
                margin: '5px',
                width: '40px',
                height: '40px',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
          }}
          onClick={deleteTaskCard}
      >
                   Delete
        </button>
    )
    }

export default DeleteTask