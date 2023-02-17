import React from 'react'
import Layout from '../src/components/Layout'
import Image from 'next/image'
import Frases from '../src/components/Frases'
const about = () => {
  return (
    <>
      <Layout>
        <div className="breadcrumb-area bg-image-3 ptb-150">
          <div className="container">
            <div className="breadcrumb-content text-center">
              <h3>Quienes Somos</h3>
            </div>
          </div>
        </div>
        <div className="about-us-area pt-100 pb-100 gray-bg ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 d-flex align-items-center">
                <div className="overview-content-2">
                  <h4>Bienvedios a</h4>
                  <h2>Chifa Vegan!</h2>
                  <p className="peragraph-blog">Somos un restaurante que brinda un excelente servicio de alimentación a base de plantas, ofreciendo una variedad de platos orientales y bebidas para degustar.  Nos identificamos por mantener el respeto y ética hacia los animales, siendo reconocidos por nuestra buena sazón. Comunícate con nosotros a través de nuestras redes sociales o página web.</p>
                  <h4>Visión</h4>
                  <p className="peragraph-blog">Ser reconocidos en el Perú por nuestra variedad de platos occidentales, una rápida entrega de nuestro producto y destacar por nuestra excelente atención.</p>
                  <h4>Misión</h4>
                  <p className="peragraph-blog">Somos el primer chifa vegano especializado en una alimentación a base de plantas, promoviendo conciencia en el respeto hacia los animales, cumpliendo las expectativas de nuestros consumidores.</p>
                  <div className="overview-btn mt-40">
                    <Image width={127} height={49} src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676043183/chifa/signature_xgtn9l.png" alt="Candidate Signature" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="overview-img text-center">
                  <a>
                    <Image
                      src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676614968/chifa/LOGUITO-light_lxpxpu.png"
                      alt="Logo Chifa Vegan"
                      width={590}
                      height={470}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Frases/>
        <div className='team-area pt-95 pb-70 gray-bg'>
          <div className='container'>
            <div className='product-top-bar section-border mb-50'>
              <div className='section-title-wrap style-two text-center'>
                <h3 className='section-title'>Miembros de equipo</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='team-wrapper mb-30'>
                  <div className='team-img'>
                    <Image 
                      src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676347524/chifa/miembros/luisito_lrqjlm.jpg"
                      alt=''
                      width={370}
                      height={452}
                    />
                  </div>
                  <div className='team-content text-center'>
                    <h4>Luis Carhuamaca</h4>
                    <span>Integrante</span>
                  </div>  
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='team-wrapper mb-30'>
                  <div className='team-img'>
                    <Image 
                      src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676347524/chifa/miembros/dayana_az7ibj.jpg"
                      alt=''
                      width={370}
                      height={452}
                    />
                  </div>
                  <div className='team-content text-center'>
                    <h4>Dayana Ramos</h4>
                    <span>Integrante</span>
                  </div>  
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='team-wrapper mb-30'>
                  <div className='team-img'>
                    <Image 
                      src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676347524/chifa/miembros/milagros_lwqhqi.jpg"
                      alt=''
                      width={370}
                      height={452}
                    />
                  </div>
                  <div className='team-content text-center'>
                    <h4>Milagros Leiva</h4>
                    <span>Integrante</span>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default about
