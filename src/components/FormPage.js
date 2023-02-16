import React, { useState, useEffect, useContext } from 'react'
import { Globales } from '../context/context';
import CreditCard from './CreditCard'
import FormCard from './FormCard';
import FormUser from './FormUser'
import Image from 'next/image';

const FormPage = () => {

  const {usuario, pedido} = useContext(Globales);
  //const [usuario, setUsuario] = useState({});
  const [entradas, setEntradas] = useState([]);
  const [platos, setPlatos] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [total, setTotal] = useState([]);
  const [cont, setCont] = useState(false);

  const [te, setTe] = useState([]);
  const [tp, setTp] = useState([]);
  const [tb, setTb] = useState([]);


  useEffect(()=> {
    if (!!pedido) {

      if(pedido.bebidas.length > 0) {
        let arr = [];
        let price = [];
        pedido.bebidas.forEach(element => {
          const value = JSON.parse(element);
          arr.push(value);
        });
        let unitPrice = arr.map(el => el.precio);
        price = unitPrice;
        //price = price.concat(total);
        //console.log(price);
        //console.log(total);
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
        //price = price.concat(total);
       // console.log(price);
       // console.log(total);
        setEntradas(arr);
        setTe(price);
      }

      if(pedido.platos.length > 0) {
        let arr = [];
        let price = [];
        pedido.platos.forEach(element => {
          const value = JSON.parse(element);
          arr.push(value);
          //price = arr.map(el => el.precio);
          //console.log(price);
        });
        let unitPrice = arr.map(el => el.precio);
        price = unitPrice;
        //price = price.concat(total);
       // console.log(price);
       // console.log(total);
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
    <div className='form_page' style={{background: '#fefbf0'}}>
      <div className='container'>
        <div className='container_content'>
        <div className='container_form'>
        {
          Object.keys(usuario).length > 0
          ? 
          (
            <FormCard
              total={total}
            />
          )
          :
          (
            <FormUser
            />
          )
        }

        </div>
        </div>
        <div className='container_image'>
            <p className='title_1 title'>Detalle de pedido</p>
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
              <p>S/{ (el.precio).toFixed(2) }</p>
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
              <p>S/{ (el.precio).toFixed(2) }</p>
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
              <p>S/{ (el.precio).toFixed(2) }</p>
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
        </div>
      </div>
    </div>
  )
}

export default FormPage
