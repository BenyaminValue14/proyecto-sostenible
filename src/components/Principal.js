import React from 'react'
import Slider from './Slider'
import Products from './Products'
import Frases from './Frases'

const Principal = () => {
  return (
    <>
      <Slider/>
      <div className='product-area bg-image-1 pt-100 pb-95'>
        <div className='product-area-content'>
        <Products/>
        </div>
      </div>
      <Frases/>
    </>
  )
}

export default Principal
