import React from 'react'
import Image from 'next/image'

const Pedido = ({entradas, platos}) => {
  return (
    <div className='container_form'>
      {
        entradas.length > 0
        &&
        entradas.map((el, idx) => {
          return (
            <div key={el.id} className="row  pb-3 w-100">
              <div className='col-3 col-sm-2 relative'>
                <Image
                  src={el.imagen ? el.imagen : "https://res.cloudinary.com/dxefwzl0v/image/upload/v1676430186/chifa/chinese-food-chopsticks-svgrepo-com_ec8xoa.svg"}
                  alt=''
                  fill={true}
                />
              </div>
              <div className='col-6 col-sm-5'>
                <p>{el.nombre}</p>
              </div>
              <div className='col-3 col-sm-2'>
                <p>S/{el.precio}0</p>
              </div>
            </div>
          )
        })
      }

      {
        platos.length > 0
        &&
        platos.map((el, idx) => {
          return (
            <div key={el.id} className="row  pb-3 w-100">
              <div className='col-3 col-sm-2 relative'>
                <Image
                  src={el.imagen ? el.imagen : "https://res.cloudinary.com/dxefwzl0v/image/upload/v1676430186/chifa/chinese-food-chopsticks-svgrepo-com_ec8xoa.svg"}
                  alt=''
                  fill={true}
                />
              </div>
              <div className='col-6 col-sm-5'>
                <p>{el.nombre}</p>
              </div>
              <div className='col-3 col-sm-2'>
                <p>S/{el.precio}0</p>
              </div>
            </div>
          )
        })
      }

      {
        bebidas.length > 0
        &&
        bebidas.map((el, idx) => {
          return (
            <div key={el.id} className="row pb-3 w-100">
              <div className='col-3 col-sm-2 relative'>
                <Image
                  src={el.imagen ? el.imagen : "https://res.cloudinary.com/dxefwzl0v/image/upload/v1676430186/chifa/chinese-food-chopsticks-svgrepo-com_ec8xoa.svg"}
                  alt=''
                  fill={true}
                />
              </div>
              <div className='col-6 col-sm-5'>
                <p>{el.nombre}</p>
              </div>
              <div className='col-3 col-sm-2'>
                <p>S/{el.precio}0</p>
              </div>
            </div>
          )
        })
      }
      <div className="row pb-3 w-100">
        <div className='col-3 col-sm-2 relative'></div>
        <div className='col-6 col-sm-5 bold'><strong>Total:</strong></div>
        <div className='col-3 col-sm-2 bold'><strong>S/{total}</strong></div>
      </div>
    </div>
  )
}

export default Pedido
