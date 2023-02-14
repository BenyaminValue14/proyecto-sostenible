import React from 'react'
import Layout from '../src/components/Layout'
import Image from 'next/image'
import Frases from '../src/components/Frases'
const about = () => {
  return (
    <>
      <Layout>
        <div class="breadcrumb-area bg-image-3 ptb-150">
          <div class="container">
            <div class="breadcrumb-content text-center">
              <h3>Quienes Somos</h3>
            </div>
          </div>
        </div>
        <div class="about-us-area pt-100 pb-100 gray-bg ">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12 d-flex align-items-center">
                <div class="overview-content-2">
                  <h4>Bienvedios a</h4>
                  <h2>Chifa Vegan!</h2>
                  <p class="peragraph-blog">Lorem LoremLorem Lorem Lorem Lorem</p>
                  <p>Disponible todos nuestros productos vía online, con provedores o productores de alta categoría, ofreciendo los mejores platos veganos para que ti.</p>
                  <div class="overview-btn mt-40">
                    <Image width={127} height={49} src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676043183/chifa/signature_xgtn9l.png" alt="Candidate Signature" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="overview-img text-center">
                  <a href="#">
                    <Image
                      src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676347946/chifa/LOGO_ohcklm.png"
                      alt=""
                      width={570}
                      height={400}
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
                    <h4>Luis</h4>
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
                    <h4>Dayana</h4>
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
                    <h4>Milagros</h4>
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
