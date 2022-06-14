import React, { useState } from 'react'
import './Newsletter.css'
import Icon from '../svg/newsletter.svg'
import { emailSchema } from '../validations/EmailValidation'

const Newsletter = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const validateEmail = async (event) => {
        event.preventDefault()
        let formData = {
            name: event.target[0].value,
            email: event.target[1].value,
        };
        
        const isValid = await emailSchema.isValid(formData);
        console.log(isValid)
        console.log(formData)
    };

    return (
        <>
            <form className='news-div' onSubmit={validateEmail}>
                <div className='icon-div'>
                    <img className='imgicon' src={Icon} alt='news'/>
                    <p className='title-news'>Receba nossas novidades, descontos e muito mais</p>
                </div>
 
                <div className='input-div'>
                    <input 
                    required type='text' 
                    placeholder='Digite seu nome' 
                    className='inputC'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    /> 
                    <input 
                    required type='email' 
                    placeholder='Digite seu e-mail' 
                    className='inputC'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    /> 
                </div>

                <div className='btn-div'>
                    <button  
                    className='btn' 
                    type='submit'
                    >
                    Eu quero receber novidades!
                    </button>
                </div>
            </form>
        </>
    )
}

export default Newsletter