import React, { useState, useEffect } from 'react'
import './Categories.css'
import api from '../../services/api.js'

const Categories = () => {
    const [catUm, setCatUm] = useState('')
    const [catDois, setCatDois] = useState('')
    const [catTres, setCatTres] = useState('')

    useEffect(() => {
        api.get("category/1").then(({ data }) => {
            setCatUm(data);
        })

        api.get("category/2").then(({ data }) => {
            setCatDois(data);
        })

        api.get("category/3").then(({ data }) => {
            setCatTres(data);
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className='div-cards'>
                <div className='card-one'>
                    <h1 className='cat-one'>
                        {catUm?.name}
                        {/* Livros */}
                    </h1>
                </div>

                <div className='card-two'>
                    <h1 className='cat-two'>
                        {catDois?.name}
                        {/* Escritório */}
                    </h1>
                </div>

                <div className='card-three'>
                    <h1 className='cat-three'>
                        {catTres?.name}
                        {/* Vestuário */}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Categories