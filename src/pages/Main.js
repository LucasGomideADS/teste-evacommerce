import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Categories from '../components/Categories/Categories'
import Footer from '../components/Footer/Footer'
import Infos from '../components/Infos/Infos'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter'
import Books from '../components/Products/Books'
import Clothes from '../components/Products/Clothes'
import Office from '../components/Products/Office'
import Products from '../components/Products/Products'


const Main = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Infos />
            <Categories />
            <Products />
            <Books />
            <Office />
            <Clothes />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Main