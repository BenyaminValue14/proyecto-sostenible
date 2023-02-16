import React, { useContext } from 'react'
import { Globales } from '../context/context'

const EntregaUser = () => {

  const {usuario} = useContext(Globales);

  return (
    <>
      {
        Object.values(usuario).length > 0
        &&
        (
          <>
          <div>
            <p>Tu pedido llegará en 20 minutos</p>
          </div>
          <div>
            <p className='mb-1 font-weight-bold'>Nombre:</p>
            <p>{usuario?.first_name}</p>
          </div>
          <div>
            <p className='mb-1 font-weight-bold'>Número DNI:</p>
            <p>{usuario?.document_number}</p>
          </div>
          <div>
            <p className='mb-1 font-weight-bold'>Celular:</p>
            <p>{usuario?.phone}</p>
          </div>
          <div>
            <p className='mb-1 font-weight-bold'>Dirección de envío:</p>
            <p>{usuario?.address}</p>
          </div>
          </>
        )

      }
    </>
  )
}

export default EntregaUser
