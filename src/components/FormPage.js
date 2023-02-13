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


  useEffect(()=> {
    if (!!pedido) {
      if(pedido.bebidas.length > 0) {
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
    <div className='form_page'>
      <div className='container' style={{background: '#fefbf0'}}>
        <div className='container_content'>
        <div className='container_form'>
        {
          Object.keys(usuario).length > 0
          ? 
          (
            <FormCard/>
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
            <div className='container_form'>
            {
        entradas.length > 0
        && 
        entradas.map((el, idx) => {
          return (
            <div key={el.id} className="row  pb-3">
            <div className='col-2 relative'>
              <Image 
              src={el.imagen} 
              alt=''
              width={120}
              height={80}
              />
            </div>
            <div className='col-5'>
              <p>{el.nombre}</p>
            </div>
            <div className='col-4'>
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
            <div className='col-2 relative'>
            <Image 
              src={el.imagen} 
              alt=''
              width={120}
              height={80}
              />
            </div>
            <div className='col-5'>
              <p>{el.nombre}</p>
            </div>
            <div className='col-4'>
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
            <div className='col-2 relative'>
            <Image 
              src={el.imagen} 
              alt=''
              width={120}
              height={80}
              />
            </div>
            <div className='col-5'>
              <p>{el.nombre}</p>
            </div>
            <div className='col-4'>
              <p>S/{el.precio}0</p>
            </div>
            </div>
          )
        })
      }
            </div>
        </div>
      </div>
    </div>
  )
}

export default FormPage
