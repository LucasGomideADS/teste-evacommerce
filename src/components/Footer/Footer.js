import React from 'react'
import './Footer.css'
import Shop from '../../svg/loja.svg'
import End from '../../svg/mapa.svg'
import Wpp from '../../svg/whatsapp.svg'
import Email from '../../svg/email.svg'

const Footer = () => {
    return (
        <>
            <footer className='div-footer'>
                <div className='div-shop'>
                    <h3 className='title-shop'>Eva Shop</h3>
                    <div className='line'></div>
                    <img className='icon-shop' src={Shop} alt='shop'/>
                    <p className='pp-hover'>Quem somos</p>
                    <p className='pp-hover'>Política de privacidade</p>
                    <p className='pp-hover'>Feedback de clientes</p>
                    <p className='pp-hover'>Trocas e devoluções</p>
                </div>

                <div className='div-end'>
                    <img className='icon-end' src={End} alt='end'/>
                    <p className='pp'>Rua Av. Rio Negro, 1100</p>
                    <p className='pp'>Jardim Roselandia</p>
                    <p className='pp'>14406-005</p>
                    <p className='pp'>Franca / SP</p>
                </div>

                <div className='div-contact'>
                    <img className='icon-shop' src={Shop} alt='shop'/>
                    <div className='wpp'>
                        <img src={Wpp} className='wpp-icon' alt='wpp'/>
                        <p className='pp'>(16) 9 98179-7325</p> 
                    </div>
                    <div className='email-ctt'>
                        <img src={Email} className='email-icon' alt='email'/>
                        <p className='pp'>contato@evacommerce.com.br</p>
                    </div>
                </div>

                <div className='div-empty'></div>
            </footer>
        </>
    )
}

export default Footer