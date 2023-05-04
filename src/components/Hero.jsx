import React from 'react'

import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-10'>
            <img src={logo} alt='logo' className='w-28 object-contain' />
            <button 
                type='button'
                onClick={() => window.open('www.google.com', '_blank')}
                className='black_btn'
            >
                Github
            </button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAI GPT</span> 
        </h1>
        <h2 className='desc'>
            Summarize any article with the power of OpenAI's GPT model. <br className='max-md:hidden'/>
        </h2>

        <p className='subdesc'>
            Please, be patient, it takes a few seconds to read and summarise the article. <br className='max-md:hidden'/>
        </p>

    </header>
  )
}

export default Hero