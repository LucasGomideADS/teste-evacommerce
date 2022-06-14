import React from 'react'
import '../../App.css'
import './Navbar.css'
import Logo from '../../images/logo.png'
import Cart from '../../svg/carrinho.svg'
import User from '../../svg/usuario.svg'


const Navbar = () => {

  return (
    <>
     <div className='Navbar'>
         <div className='one'>           
             <div className='icon-div'>
                <img src={Logo} alt='logo' className='image'/>
             </div>   
         </div>

         <div className='two'>
            <a href='/' className='links'>Categorias</a>
            <input type="text" className='input-search' placeholder="Search.."/>
            
            <a href='/' className='links'>Minha conta</a>
            <img src={User} alt='cart' className='user-svg'/>
            
            <a href='/' className='links'>Carrinho (2)</a>
            <img src={Cart} alt='cart' className='cart-svg'/>
         </div>
         <div className='three'></div>
     </div>
    </>
  )
}

export default Navbar

    // <div className='Navbar'>
    //     <div className='one'>           
    //         <div className='icon-div'>
    //             <img src={Logo} alt='logo' className='image'/>
    //         </div>   
    //     </div>

    //     <div className='two'>
    //         <input type="text" placeholder="Search.."/>
    //     </div>
    //     <div className='three'></div>
    // </div>