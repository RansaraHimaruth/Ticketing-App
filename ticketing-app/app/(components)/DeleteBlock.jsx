import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation';
import React from 'react'

function DeleteBlock({id}) {

  const router = useRouter();

  const deleteTicket = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
        method: 'DELETE',
      });
      if (response.ok){
        router.refresh();
      }
    } catch (error) {
      console.log("Error deleting ticket", error);
    }
  
  }

  return (
<FontAwesomeIcon icon ={faX} className='text-red-400 hover:cursor-pointer hover:text-red-200' onClick={deleteTicket}/>
  )
}

export default DeleteBlock
