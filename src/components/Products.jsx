import React from 'react'
import Card from './Card'
import { ProductInfo } from '../constants'
import Button from './Button'

const Products = () => {
  return (
    <section id='Product' className='flex flex-col items-center justify-center 
    w-full  py-[1rem] z-40'>
      <div className='flex flex-col items-center justify-center 
    w-[70%] max-md:w-[80%] max-sm:w-[80%] z-40'>
        <h1 className='font-bold text-color-brown text-[2rem]'>Products</h1>

        <div className=' flex items-center justify-center flex-wrap'> 
            {ProductInfo.map((items)=>(
              <Card key={items.id} title={items.title} Price={items.price} imgUrl={items.imageUrl}/>
            ))}
        </div>   

        <div className='w-full flex flex-row gap-3 items-center justify-center my-4'>
            <Button title={'Previous'} className={`w-[100px] h-[45px] rounded-lg card_border`}/>
            <div className='w-[30px] h-[30px] bg-dark-brown flex items-center justify-center rounded-md card_border'>
              <p className='text-white font-semibold'>1</p>
            </div>

            <div className='w-[30px] h-[30px]  flex items-center justify-center rounded-md card_border'>
              <p className='text-dark-brown font-semibold'>2</p>
            </div>
            <div className='w-[30px] h-[30px]  flex items-center justify-center rounded-md card_border'>
              <p className='text-dark-brown font-semibold'>3</p>
            </div>
            <Button title={'Next'} className={`w-[100px] h-[45px] rounded-lg card_border`}/>
        </div>   
        </div>  
    </section>
  )
}

export default Products