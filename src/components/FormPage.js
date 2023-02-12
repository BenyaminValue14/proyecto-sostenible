import React, { useState, useEffect } from 'react'
import CreditCard from './CreditCard'
import FormCard from './FormCard';
import FormUser from './FormUser'

const FormPage = () => {
  const [usuario, setUsuario] = useState({});
  useEffect(() => {
    console.log();

  }, [])
  
  return (
    <div className='form_page'>
      <div className='container'>
        <div className='container_content'>
        <div className='container_form'>
        {
          Object.keys(usuario).length > 0
          ? 
          (
            <FormCard/>
          )
          :
          (
            <FormUser
            setUsuario={setUsuario}
            />
          )
        }

        </div>
        </div>
        <div className='container_image'>
          
        </div>
      </div>
    </div>
  )
}

export default FormPage
