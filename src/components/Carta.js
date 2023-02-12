import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import menu from '../db/menu.json';
import {useForm} from 'react-hook-form';
import { useRouter } from 'next/router'

function Carta({showModal, setShowModal, setPedido}) {
  //const [show, setShow] = useState(false);
  const {handleSubmit, register} = useForm({
    defaultValues: {
      entradas: [],
      platos: [],
      bebidas: []
    }
  });
  const [entradas, setEntradas] = useState([]);
  const [platos, setPlatos] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const router = useRouter()

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const toggle = (f_state) => {
    f_state((e) => !e);
  }


  useEffect(()=> {
    setEntradas(menu.entradas);
    setPlatos(menu.platos);
    setBebidas(menu.bebidas);
  }, []);

  const onChange = (e) => {
    console.log(e.target.value);
  }
  const submitCarta = (data) => {
    setPedido(data);
    console.log(JSON.stringify(data));
    router.push("form");

  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(submitCarta)} >
            <div className='carta-container'>
            <div>
                <p className='carta-title'>Entradas</p>
            </div>
            {
                entradas.map((el, idx)=>{
                    return (
                      <div className='carta-content'  key={idx}>
                      <input 
                      name='entradas'
                      {...register("entradas")}
                      type="checkbox" 
                      id={el.id} 
                      value={el.id}
                      />
                      <label htmlFor={el.id} className=" mb-4 w-100">
                        <div className="media p-0 m-0 alert alert-dismissible items-list-2 border-0 row">   
                            <a className='carta-image col-3'>
                            {
                                el.imagen && <Image alt='' src={el.imagen} width={90} height={85} />
                            }
                            </a>
                            <div className='media-body col-6 px-0'>
                                <h5 className='mt-0 mb-1'>{el?.nombre}</h5>
                                {
                                    el.cantidad && <small className='font-w500 mb-3'>{el.cantidad} UNID.</small>
                                }
                            </div>
                            <div className='col-3 media-footer align-self-center ml-auto d-block align-items-center d-sm-flex'>
                                <span>{el.precio ? `S/. ${el.precio}0` : 0.00 }</span>
                            </div>
                        </div>
                      </label>
                      </div>
                    )
                })
            }
            <div>
                <p className='carta-title'>Platos</p>
            </div>
            {
                platos.map((el, idx)=>{
                    return (
                      <div className='carta-content'  key={idx}>
                      <input 
                      name='platos'
                      {...register("platos")}
                      type="checkbox" 
                      id={el.id} 
                      value={el.id}
                      />
                        <label htmlFor={el.id} className="mb-4 w-100">
                          <div className="row media p-0 m-0 alert alert-dismissible items-list-2 border-0">
                              <a className='carta-image col-3'>
                              {
                                  el.imagen && <Image alt='' src={el.imagen} width={90} height={85} />
                              }
                              </a>
                              <div className='media-body col-6 px-0'>
                                  <h5 className='mt-0 mb-1'>{el?.nombre}</h5>
                                  {
                                      el.cantidad && <small className='font-w500 mb-3'>{el.cantidad} UNID.</small>
                                  }
                              </div>
                              <div className='col-3 media-footer align-self-center ml-auto d-block align-items-center d-sm-flex'>
                                  <span>{el.precio ? `S/. ${el.precio}0` : 0.00 }</span>
                              </div>
                          </div>
                        </label>
                      </div>
                    )
                })
            }
            <div>
                <p className='carta-title'>Bebidas</p>
                {
                    bebidas.map((el, idx)=> {
                        return (
                          
                            <div key={idx}>
                                <p className='carta-title'>{el.titulo}</p>
                                {
                                    el.contenido.map((item,index)=> {
                                        return (
                                          <div className='carta-content'  key={index}>
                                          <input 
                                          name="bebidas"
                                          {...register("bebidas")}
                                          type="checkbox" 
                                          id={item.id} 
                                          value={item.id}
                                          />
                                           <label htmlFor={item.id} className="mb-4 w-100">
                                            <div className="row media p-0 mb-4 alert alert-dismissible items-list-2 border-0">
                                            <a className='carta-image col-3'>
                                            {
                                                item.imagen && <Image alt='' src={item.imagen} width={90} height={85} />
                                            }
                                            </a>
                                            <div className='media-body col-6 px-0'>
                                                <h5 className='mt-0 mb-1'>{item?.nombre}</h5>
                                                {
                                                    item.cantidad && <small className='font-w500 mb-3'>{item.cantidad} UNID.</small>
                                                }
                                            </div>
                                            <div className='col-3 media-footer align-self-center ml-auto d-block align-items-center d-sm-flex'>
                                                <span>{item.precio ? `S/. ${item.precio}` : 0.00 }</span>
                                            </div>
                                            </div>
                                           </label>
                                          </div>
                                        )
                                    })
                                }
                                </div>
                        )
                    })
                }
                <ul>
                    
                </ul>
            </div>
            </div>
            <input type="submit" value="Pedir ahora" />
          </form>
        </Modal.Body>
        {/*<Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>*/}
      </Modal>
    </>
  );
}

export default Carta;
