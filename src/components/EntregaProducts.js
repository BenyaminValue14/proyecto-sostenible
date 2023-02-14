import React, { useContext, useEffect, useState } from 'react'
import { Globales } from '../context/context'
import Image from 'next/image';

const EntregaProducts = () => {

  const {pedido} = useContext(Globales);
  const [entradas, setEntradas] = useState([]);
  const [platos, setPlatos] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [isContent, setIsContent] = useState(false);

  useEffect(()=> {
    if (!!pedido) {
      if(pedido.bebidas.length > 0) {
        setIsContent(true);
        let arr = [];
        pedido.bebidas.forEach(element => {
          const value = JSON.parse(element);
          arr.push(value);
        });
        setBebidas(arr);
      }
      //if(pedido.platos.length > 0) setPlatos(JSON.parse(pedido.platos));
      //if(pedido.entradas.length > 0) setEntradas(JSON.parse(pedido.entradas));
      if(pedido.entradas.length > 0) {
        let arr = [];
        pedido.entradas.forEach(element => {
          const value = JSON.parse(element);
          arr.push(value);
        });
        setEntradas(arr);
      }

      if(pedido.platos.length > 0) {
        let arr = [];
        pedido.platos.forEach(element => {
          const value = JSON.parse(element);
          arr.push(value);
        });
        setPlatos(arr);
      }
    }
  }, []);
  return (
    <div>
      <div className='row'>
        {
          isContent === true
          ?
          (
            <>
            <div className='col-3 col-lg-2'>
              <p>Categoría</p>
            </div>
            <div className='col-5 col-lg-5'>
              <p>Producto</p>
            </div>
            <div className='col-3 col-lg-4'>
              <p>Subtotal</p>
            </div>
            </>
          )
          :
          <p className='text-alert'>Aun no tienes productos</p>
        }
        
      </div>
      {
        entradas.length > 0
        && 
        entradas.map((el, idx) => {
          return (
            <div key={el.id} className="row  pb-3">
            <div className='col-3 col-lg-2 relative'>
              <Image 
              src={el.imagen} 
              alt=''
              width={120}
              height={80}
              />
            </div>
            <div className='col-5 col-lg-5'>
              <p>{el.nombre}</p>
            </div>
            <div className='col-3 col-lg-4'>
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
            <div key={el.id} className="row  pb-3">
            <div className='col-3 col-lg-2 relative'>
            <Image 
              src={el.imagen} 
              alt=''
              width={120}
              height={80}
              />
            </div>
            <div className='col-5 col-lg-5'>
              <p>{el.nombre}</p>
            </div>
            <div className='col-3 col-lg-4'>
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
            <div key={el.id} className="row pb-3">
            <div className='col-3 col-lg-2 relative'>
            <Image 
              src={el.imagen} 
              alt=''
              width={120}
              height={80}
              />
            </div>
            <div className='col-5 col-lg-5'>
              <p>{el.nombre}</p>
            </div>
            <div className='col-3 col-lg-4'>
              <p>S/{el.precio}0</p>
            </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default EntregaProducts
