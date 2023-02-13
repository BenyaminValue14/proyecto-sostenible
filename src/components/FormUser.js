import React, { use, useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Globales } from '../context/context';


const FormUser = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const {usuario, setUsuario} = useContext(Globales);
  const onSubmit = data => {
    //data llega ser un objeto
    const keys = Object.keys(data);
    if (keys.length > 0) {
      setUsuario(data);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className='title_1 title'>Llena tus datos</p>
      <div className='decoration_line'></div>
      <div className=''>
        <div className='group_section_form_datos'>
          <label htmlFor="first_name">Tu Nombre</label>
          <input type="text" {...register("first_name", {
            required: 'Campo requerido'
          })} />
          {errors.first_name && <p className='text-error'>{errors.first_name.message}</p>}
        </div>
        <div className='group_section_form_datos'>
          <label htmlFor="phone">Celular</label>
          <input maxLength={9} type="tel" {...register("phone", {
            required: 'Campo requerido',
            minLength: {
              value: 9,
              message: 'Minimo 9 caracteres'
            }
          })} />
          {errors.phone && <p className='text-error'>{errors.phone.message}</p>}
        </div>
        <div className='group_section_form_datos'>
          <label htmlFor="document_number">DNI</label>
          <input type="tel" {...register("document_number", {
            required: 'Campo requerido',
            minLength: {
              value: 7,
              message: 'Minimo 7 caracteres'
            }
          })} />
          {errors.document_number && <p className='text-error'>{errors.document_number.message}</p>}
        </div>
        <div className='group_section_form_datos'>
          <label htmlFor="address">Dirección</label>
          <input type="text" {...register("address", {
            required: 'Campo requerido'
          })} />
          {errors.address && <p className='text-error'>{errors.address.message}</p>}
        </div>
      </div>


      <input type="submit" className='btn_send button-1' value="Continuar" />
    </form>
  )
}

export default FormUser
