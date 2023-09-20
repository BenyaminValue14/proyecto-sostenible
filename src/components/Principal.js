import React from 'react'
import Slider from './Slider'
import Products from './Products'
import Services from './Services'
import Frases from './Frases'

const Principal = () => {
  return (
    <>
      <Slider/>
      <div className='product-area gray-bg pt-100 pb-95'>
        <div className='product-area-content'>
          <p className='title-category'>Servicios</p>
        <Services/>
        </div>
      </div>
      <div className='gray-bg'>
        <div className='container'>
          <p className='title-category'>Recomendaciones</p>
        </div>
        <Frases/>
      </div>
    </>
  )
}

export default Principal
