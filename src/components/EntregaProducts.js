import React, { useContext, useEffect, useState } from 'react'
import { Globales } from '../context/context'
import Image from 'next/image';

const EntregaProducts = () => {

  const {pedido} = useContext(Globales);
  //state
  const [entradas, setEntradas] = useState([]);
  const [platos, setPlatos] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [isContent, setIsContent] = useState(false);

  const [total, setTotal] = useState([]);
  const [cont, setCont] = useState(false);
  const [te, setTe] = useState([]);
  const [tp, setTp] = useState([]);
  const [tb, setTb] = useState([]);

  useEffect(()=> {
    if (!!pedido) {
      if(pedido.bebidas.length > 0) {
        setIsContent(true);
        let arr = [];
        let price = [];
        pedido.bebidas.forEach(element => {
          const value = JSON.parse(element);
          arr.push(value);
        });
        let unitPrice = arr.map(el => el.precio);
        price = unitPrice;
        setBebidas(arr);
        setTb(price);
      }
      //if(pedido.platos.length > 0) setPlatos(JSON.parse(pedido.platos));
      //if(pedido.entradas.length > 0) setEntradas(JSON.parse(pedido.entradas));
      if(pedido.entradas.length > 0) {
        let arr = [];
        let price = [];
        pedido.entradas.forEach(element => {
          const value = JSON.parse(element);
          arr.push(value);
        });
        let unitPrice = arr.map(el => el.precio);
        price = unitPrice;
        setEntradas(arr);
        setTe(price);
      }

      if(pedido.platos.length > 0) {
        let arr = [];
        let price = [];
        pedido.platos.forEach(element => {
          const value = JSON.parse(element);
          arr.push(value);
        });
        let unitPrice = arr.map(el => el.precio);
        price = unitPrice;
        setPlatos(arr);
        setTp(price);
      }
    }
    setCont(true);
  }, []);

  useEffect(() => {
    if (cont) {
      //setTotal([...tb, ...tp, ...te]);
      let sum = 0;
      tb.forEach(el => sum = sum + el);
      tp.forEach(el => sum = sum + el);
      te.forEach(el => sum = sum + el);
      console.log(sum.toFixed(2));
      setTotal(sum.toFixed(2));
    }
  }, [cont]);
  return (
    <div>
      <div className='row'>
        <p className='title'>Detalle de Pedido</p>
        {
          isContent === true
          ?
          (
            <>
            <div className='col-4 col-lg-2'>
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
            <div className='col-4 col-lg-2 relative'>
              <Image 
              src={el.imagen ? el.imagen : 'https://res.cloudinary.com/dxefwzl0v/image/upload/v1676430186/chifa/chinese-food-chopsticks-svgrepo-com_ec8xoa.svg'} 
              alt=''
              width={80}
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
            <div className='col-4 col-lg-2 relative'>
            <Image 
              src={el.imagen ? el.imagen : 'https://res.cloudinary.com/dxefwzl0v/image/upload/v1676430186/chifa/chinese-food-chopsticks-svgrepo-com_ec8xoa.svg'} 
              alt=''
              width={80}
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
            <div className='col-4 col-lg-2 relative'>
            <Image 
              src={el.imagen ? el.imagen : 'https://res.cloudinary.com/dxefwzl0v/image/upload/v1676430186/chifa/chinese-food-chopsticks-svgrepo-com_ec8xoa.svg'} 
              alt=''
              width={80}
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
      <div className="row pb-3 w-100">
      <div className='col-4 col-sm-2 relative'></div>
      <div className='col-5 col-sm-5 bold'><strong>Total:</strong></div>
      <div className='col-3 col-sm-2 bold'><strong>S/{total}</strong></div>
      </div>
    </div>
  )
}

export default EntregaProducts
