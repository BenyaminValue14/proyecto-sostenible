import React from 'react'
import Layout from '../src/components/Layout'
import Image from 'next/image'
import Frases from '../src/components/Frases'
import IconLogo from '../src/svg/IconLogo'
const about = () => {
  return (
    <>
      <Layout>
      <div className='banner'>
        <Image 
            src='https://www.elperuano.pe/fotografia/thumbnail/2019/01/08/000053615M.jpg' 
            alt='banner educacion rural'
            width="760"
            height="400"
        />
        <div className="breadcrumb-area  bg-image-4 ptb-150">
          <div className="container banner">
            <div className="breadcrumb-content text-center">
              <h3>Quienes Somos</h3>
            </div>
          </div>
        </div>
      </div>
        <div className="about-us-area pt-100 pb-100 gray-bg ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 d-flex align-items-center">
                <div className="overview-content-2">
                  <h4>Les presentamos</h4>
                  <h2>Agro Educa!</h2>
                  <p className="peragraph-blog">
                    Somos un grupo de jóvenes estudiantes presentando una solución para la educacióm rural
                    con el fin de que los niños y las niñas estudiantes puedan tener acceso a mejores conocimientos académicos
                    a través de la plataforma que ofrecemos a los docentes.
                  </p>
                  <h4>Visión</h4>
                  <p className="peragraph-blog">
                  Disminuir la brecha digital y educativa en las zonas rurales a un 5% impactando a las 2 provincias del Perú
                  </p>
                  <h4>Misión</h4>
                  <p className="peragraph-blog">
                  Mejorar la educación rural en la provincia de Ancash en zonas rurales, brindando nuestra herramienta digital
                  a los docentes y capacitarlos para su uso.
                  </p>
                  <div className="overview-btn mt-40">
                    <Image width={127} height={49} src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676043183/chifa/signature_xgtn9l.png" alt="Candidate Signature" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="overview-img text-center">
                  <div className='container-image'>
                    <a>
                      <IconLogo />
                    </a>
                  </div>
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
              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='team-wrapper mb-30'>
                  <div className='team-img'>
                    <Image 
                      src="https://dummyimage.com/300x400/cccccc/fff"
                      alt=''
                      width={370}
                      height={452}
                    />
                  </div>
                  <div className='team-content text-center'>
                    <h4>Newton</h4>
                    <span>Integrante</span>
                  </div>  
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='team-wrapper mb-30'>
                  <div className='team-img'>
                    <Image 
                      src="https://dummyimage.com/300x400/cccccc/fff"
                      alt=''
                      width={370}
                      height={452}
                    />
                  </div>
                  <div className='team-content text-center'>
                    <h4>Alejadandra</h4>
                    <span>Integrante</span>
                  </div>  
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='team-wrapper mb-30'>
                  <div className='team-img'>
                    <Image 
                      src="https://dummyimage.com/300x400/cccccc/fff"
                      alt=''
                      width={370}
                      height={452}
                    />
                  </div>
                  <div className='team-content text-center'>
                    <h4>Benjamín</h4>
                    <span>Integrante</span>
                  </div>  
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='team-wrapper mb-30'>
                  <div className='team-img'>
                    <Image 
                      src="https://dummyimage.com/300x400/cccccc/fff"
                      alt=''
                      width={370}
                      height={452}
                    />
                  </div>
                  <div className='team-content text-center'>
                    <h4>Cameron</h4>
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
