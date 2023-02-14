import React from 'react'
import EntregaProducts from '../src/components/EntregaProducts'
import EntregaUser from '../src/components/EntregaUser'
import Layout from '../src/components/Layout'

const entrega = () => {
  return (
    <>
      <Layout>
        <div className='entrega gray-bg'>
          <div className='container'>
            <p className='title'>¡Gracias por tu compra!</p>
            <div className='row'>
              <div className='col-12 col-lg-5'>
                <EntregaUser/>
              </div>
              <div className='col-12 col-lg-7'>
                <EntregaProducts/>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default entrega
