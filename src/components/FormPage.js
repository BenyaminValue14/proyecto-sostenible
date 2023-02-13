import React, { useState, useEffect, useContext } from 'react'
import { Globales } from '../context/context';
import CreditCard from './CreditCard'
import FormCard from './FormCard';
import FormUser from './FormUser'

const FormPage = () => {

  const {usuario} = useContext(Globales);
  //const [usuario, setUsuario] = useState({});
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
