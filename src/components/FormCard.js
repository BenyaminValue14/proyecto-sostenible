import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import CreditCard from './CreditCard';

const FormCard = () => {
  const [nombreCard, setNombreCard] = useState('');
  const [numeroCard, setNumeroCard] = useState('################');
  const [fechaCard, setFechaCard] = useState('MMYY');

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <CreditCard
        nombreCard={nombreCard}
        numeroCard={numeroCard}
        fechaCard={fechaCard}
      />
      <p className='title_1 title'></p>
      <div className='decoration_line'></div>
      <div className='group_section_form_datos'>
        <label htmlFor="full_name">Tu Nombre</label>
        <input type="text" {...register("full_name", {
          required: 'Campo requerido'
        })} 
          onChange={(e) => setNombreCard(e.target.value)}
        />
        {errors.first_name && <p className='text-error'>{errors.full_name.message}</p>}
      </div>
      <div className='group_section_form_datos'>
        <label htmlFor="number_card">Número de la tarjeta</label>
        <input type="text" maxLength={16} {...register("number_card", {
          required: 'Campo requerido'
        })} 
        autoComplete='off'
        onChange={(e) => setNumeroCard(e.target.value)}
        />
        {errors.number_card && <p className='text-error'>{errors.number_card.message}</p>}
      </div>
      <div className='group_section_form_datos'>
        <label htmlFor="number_card">Fecha de expiración</label>
        <input type="text" maxLength={4} {...register("expira", {
          required: 'Campo requerido'
        })} 
        autoComplete='off'
        onChange={(e) => setFechaCard(e.target.value)}
        />
        {errors.expira && <p className='text-error'>{errors.expira.message}</p>}
      </div>
      <div className='group_section_form_datos'>
        <label htmlFor="number_card">CVV</label>
        <input type="text" maxLength={3} {...register("cvv", {
          required: 'Campo requerido'
        })} 
        autoComplete='off'
        
        />
        {errors.cvv && <p className='text-error'>{errors.cvv.message}</p>}
      </div>
      <input type="submit" value="Comprar" />
    </form>
  )
}

export default FormCard
