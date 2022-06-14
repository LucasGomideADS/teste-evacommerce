import React from 'react'
import { useState, useEffect, useRef } from 'react';
import api from '../../services/api';
import './Office.css'
import LeftA from '../../images/left-arrow.png'
import RightA from '../../images/right-arrow.png'

const Office = () => {
    const [data, setData] = useState([])
    const carouselProduct = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()
        carouselProduct.current.scrollLeft -= carouselProduct.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        carouselProduct.current.scrollLeft += carouselProduct.current.offsetWidth
    }

    useEffect(() => {
        api.get("products").then(({ data }) => {
            setData(data);
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(data)

    return (
        <>
            <div className='div-principal'>
                <div className='line-title'></div>
                <div className='title-card-off'>Destaques em escritório</div>
                <div className='carousel-arrow'>
                    <div className='left-b'>
                        <button className='btn-left' onClick={handleLeftClick}><img src={LeftA} className='pass-left' alt='Scroll Left' /></button>
                    </div>
                    <div className='carousel-product' ref={carouselProduct}>
                        {data.map((item) => {
                            const { price, promotional_price, id, name, images } = item
                            return (<div className='product' key={id}>
                                <div className='img-pr'>
                                    <img src={images} alt='pr' />
                                </div>

                                <div className='infos-pr'>
                                    <p className='name-pr'>{name}</p>
                                    <p className='price'>R$ {promotional_price === null ? "" : price}</p>
                                    <p className='price-discount'>R$ {promotional_price != null ? promotional_price : price}</p>
                                    <p className='desc-discount'>Ou R$ {promotional_price != null ? (promotional_price - (0.1 * promotional_price)).toFixed(2) : (price - (0.1 * price)).toFixed(2)} com 10% no boleto</p>
                                </div>

                                <button className='btn-pr' type='button'>Comprar</button>
                            </div>)
                        })}
                    </div>
                    <div className='right-b'>
                        <button className='btn-right' onClick={handleRightClick}><img src={RightA} className='pass-right' alt='Scroll Left' /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Office