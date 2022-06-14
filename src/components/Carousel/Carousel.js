import React from 'react'
// import ImgCarousel from '../images/banner.jpeg'
import './Carousel.css'
import '../../App.css'

const Carousel = () => {
  return (
    <div className='carousel'>
      {/* <img className='img-carousel' src={ImgCarousel} alt='img'/> */}
      <h1 className='title'>Seus livros favoritos</h1>
      <h3 className='sub'>estão te esperando aqui!</h3>
    </div>
  )
}

export default Carousel