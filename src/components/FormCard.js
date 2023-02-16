import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Globales } from '../context/context';
import CreditCard from './CreditCard';

const FormCard = () => {
  const [nombreCard, setNombreCard] = useState('');
  const [numeroCard, setNumeroCard] = useState('################');
  const [fechaCard, setFechaCard] = useState('MMYY');
  const [options, setOptions] = useState('');
  const [contra, setContra] = useState('');

  const {setEfectivo} = useContext(Globales);
  
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    router.push("entrega");
  }
  const handleRadio = (e) => {
    setOptions(e.target.value);
  } 
  const handleButton = () => {
    if (contra.length > 0) {
      setEfectivo(contra);
      router.push("entrega");
    }
  }

  return (
    <>
      <p className='title_1 title w-100'>Elige tu medio de pago</p>
      <div className='radio w-100'>
        <label></label>
        <input 
        type="radio"
        name='pay_option'
        value="creditcard"
        onChange={handleRadio}
        checked={options === 'creditcard'}
         />
         <span>Tarjeta de crédito</span>
      </div>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <div className='creditcard-option'>
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
        </div>
        <input type="submit" className='button-2' value="Comprar" style={{maxWidth: '320px'}} />
      </form>
      <div className='contraentrega-option'>
        <div className='radio'>
          <label></label>
          <input 
          type="radio"
          name='pay_option'
          onChange={handleRadio}
          value="contraentrega"
          checked={options === 'contraentrega'}
          />
          <span>Pago contraentrega</span>
        </div>
        <div className='group_section_form_datos'>
          <p>Cuanto es el monto de su efectivo</p>
          <input type="number" max="6"
          onChange={(e) => setContra(e.target.value)} className="input input-contraentrega" />
          <input type="button" onClick={handleButton}
           value="continuar" className='button-2' />
        </div>

      </div>
    </>
  )
}

export default FormCard
