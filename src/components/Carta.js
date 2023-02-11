import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import menu from '../db/menu.json';

function Carta({showModal, setShowModal}) {
  //const [show, setShow] = useState(false);
  const [entradas, setEntradas] = useState([]);
  const [platos, setPlatos] = useState([]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const toggle = (f_state) => {
    f_state((e) => !e);
  }


  useEffect(()=> {
    setEntradas(menu.entradas);
    setPlatos(menu.platos);
  }, []);

  
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='carta-container'>
            <div>
                <p className='carta-title'>Entradas</p>
            </div>
            {
                entradas.map((el, idx)=>{
                    return (
                        <div key={idx} className="media p-0 mb-4 alert alert-dismissible items-list-2 border-0 row">
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
                    )
                })
            }
            <div>
                <p className='carta-title'>Platos</p>
            </div>
            {
                platos.map((el, idx)=>{
                    return (
                        <div key={idx} className="row media p-0 mb-4 alert alert-dismissible items-list-2 border-0">
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
                    )
                })
            }
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Carta;