import { useForm } from 'react-hook-form';
import CreditCard from '../src/components/CreditCard';
import Layout from '../src/components/Layout';

const form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
    <Layout>
      <div className='form_page'>
        <div className='container'>
          <div className='container_content'>
          <div className='container_form'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className='title_1 title'>Llena tus datos</p>
              <div className='decoration_line'></div>
              <div className='group_section_form_datos'>
                  <label htmlFor="first_name">Tu Nombre</label>
                  <input type="text" {...register("first_name", {
                      required:'Campo requerido'
                  })} />
                  {errors.first_name && <p className='text-error'>{errors.first_name.message}</p>}
              </div>
              <div className='group_section_form_datos'>
                  <label htmlFor="phone">Celular</label>
                  <input maxLength={9} type="tel" {...register("phone", {
                      required:'Campo requerido',
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
                      required:'Campo requerido',
                      minLength: {
                          value: 7,
                          message:'Minimo 7 caracteres'
                      }
                  })}  />
                    {errors.document_number && <p className='text-error'>{errors.document_number.message}</p>}
              </div>
              <div className='group_section_form_datos'>
                  <label htmlFor="address">Dirección</label>
                  <input type="text" {...register("address", {
                      required:'Campo requerido'
                  })} />
                  {errors.address && <p className='text-error'>{errors.address.message}</p>}
              </div>

              
              <input type="submit" className='btn_send' value="Continuar" />
            </form>
          </div>
          </div>
          <div className='container_image'>
            <CreditCard/>
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default form
