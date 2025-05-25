import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CreateButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='fixed top-5 right-5 bg-[#81a6ff] text-white rounded-full px-5 py-3 shadow-lg hover:bg-[#6a96fc] transition-colors duration-300 cursor-pointer z-50'>
      <FontAwesomeIcon icon={faPlus} size='xl' />    
    </button>
  )
}

export default CreateButton