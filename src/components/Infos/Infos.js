import React from 'react'
import Card from '../../svg/cartao.svg'
import Locker from '../../svg/cadeado.svg'
import Truck from '../../svg/caminhao.svg'
import './Infos.css'

const Infos = () => {
  return (
    <>
      <div className='div-infos'>
        <div className='locker'>
          <img className='svg-lock' src={Locker} alt='lock' />
          <p className='desc-l'>Site seguro</p>
        </div>

        <div className='line-one'></div>

        <div className='credit-card'>
          <img className='svg-card' src={Card} alt='lock' />
          <p className='desc-c'>Até 12x sem juros</p>
        </div>

        <div className='line-two'></div>

        <div className='shipping'>
          <img className='svg-truck' src={Truck} alt='lock' />
          <p className='desc-t'>Entrega para todo brasil</p>
        </div>
      </div>
    </>
  )
}

export default Infos