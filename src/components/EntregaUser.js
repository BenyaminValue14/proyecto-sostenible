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
            <p>Nombre:</p>
            <p>{usuario?.first_name}</p>
          </div>
          <div>
            <p>DNI:</p>
            <p>{usuario?.document_number}</p>
          </div>
          <div>
            <p>Celular:</p>
            <p>{usuario?.phone}</p>
          </div>
          <div>
            <p>Dirección de envío:</p>
            <p>{usuario?.address}</p>
          </div>
          </>
        )

      }
    </>
  )
}

export default EntregaUser
