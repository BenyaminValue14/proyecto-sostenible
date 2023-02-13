import React from 'react'

const CreditCard = ({nombreCard, numeroCard, fechaCard}) => {
  return (
    <section className="card" id="card">

            <div className="front">

               


                <img src="https://raw.githubusercontent.com/falconmasters/formulario-tarjeta-credito-3d/master/img/chip-tarjeta.png" className="chip" />


                <div className="details">

                    <div className="group" id="number">
                        <p className="label">Card Number</p>
						<p className="number">
              <span style={{paddingRight:'8px'}}>{numeroCard.substring(0,4)}</span>
              <span style={{paddingRight:'8px'}}>{numeroCard.substring(4,8)}</span>
              <span style={{paddingRight:'8px'}}>{numeroCard.substring(8,12)}</span>
              <span style={{paddingRight:'8px'}}>{numeroCard.substring(12,16)}</span>
            </p>
                    </div>


                    <div className="flexbox">


                        <div className="group" id="name">
                            <p className="label"> Number </p>
                            <p className="name">{nombreCard}</p>
                        </div>

                        <div className="group" id="expiration">
                            <p className="label">Expiration</p>
                            <p className="expiration"> <span className="month">{fechaCard.substring(0,2)}</span> / <span className="year">{fechaCard.substring(2,4)}</span> </p>
                        </div>


                    </div>

                </div>

            </div>


            <div className="back">


                <div className="magnetic-bar"></div>


                <div className="details">

                    <div className="group" id="signature">
                        <p className="label">Signature</p>
                        <div className="signature">
                            <p></p>
                        </div>
                    </div>


                    <div className="group" id="ccv">
                        <p className="label">CCV</p>
                        <p className="ccv"></p>
                    </div>

                </div>
                

                <p className="legend">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda dicta quos quas porro fuga, accusamus necessitatibus expedita illo, ipsum blanditiis quaerat deserunt illum minima ex distinctio veritatis aliquid, ipsam ut.</p>
                <a href="#" className="bank-link">http://dabank.onion</a>

            </div>


        </section>
  )
}

export default CreditCard
