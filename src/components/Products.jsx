import React from 'react'
import Card from './Card'
import { ProductInfo } from '../constants'

const Products = () => {
  return (
    <section id='Product' className='flex flex-col items-center justify-center 
    w-[70%] max-md:w-[80%] max-sm:w-[80%] py-[1rem]'>
        <h1 className='font-bold text-color-brown text-[2rem]'>Products</h1>

        <div className=' flex items-center justify-center flex-wrap'> 
            {ProductInfo.map((items)=>(
              <Card key={items.id} title={items.title} Price={items.price} imgUrl={items.imageUrl}/>
            ))}
        </div>        
    </section>
  )
}

export default Products