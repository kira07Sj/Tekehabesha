import React from 'react'
import Card from './Card'

const Products = () => {
  return (
    <section id='Product' className='flex flex-col items-center justify-center 
    w-[60%] max-sm:w-[80%] py-[1rem]'>
        <h1 className='font-bold text-color-brown'>Products</h1>

        <div className=' flex items-center justify-center flex-wrap'> 
            <Card/>
        </div>        
    </section>
  )
}

export default Products