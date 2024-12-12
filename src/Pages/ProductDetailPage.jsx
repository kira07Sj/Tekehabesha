import React from 'react'
import kemis from '/assets/products/1.jpg'
import tilet from '../assets/tilet.png'

const ProductDetailPage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center '>
        <div className=' absolute top-0 right-10 max-md:right-3 -z-10'>
            <img src={tilet} alt="bg" 
            className=' h-[700px]  object-contain scale-110  lg:scale-150' />
        </div>
        <div className='w-full flex md:flex-row flex-col items-center justify-center gap-5 mt-[6rem] max-md:mt-[2rem]'>
            <div className='w-[400px] h-[530px] rounded-lg overflow-hidden max-md:scale-[0.8] bg-dark-brown shadow-xl'>
                <img src={kemis} alt="" />
            </div>
            <div className='flex flex-col items-start  h-full justify-center w-[500px] max-sm:w-[80%] md:ml-[2rem]'>
                <h1 className='text-dark-brown text-[1.5rem] md:text-[2.3rem] font-bold my-3'>Couple habesha cloths</h1>
                <p className='md:text-[18px] py-3 opacity-75'>This stunning Habesha Kemis is crafted with the finest 
                    cotton and adorned with intricate embroidery. It blends 
                    traditional Ethiopian culture with modern elegance, 
                    perfect for special occasions.</p>
                <div className='flex items-center justify-center flex-row gap-5'>
                    
                    <p className='text-dark-brown  text-[20px] md:text-[2rem]
                    '>Price: <span className='font-semibold line-through'>6000</span></p>
                    <p className='text-dark-brown font-semibold text-[20px] md:text-[2rem]
                    '>Discount: <span className='font-bold '>5000</span></p>
                </div>

                    <a href="https://t.me/Tekehabesha" className='w-[100%]
                     h-[50px] hover:bg-light-brown bg-dark-brown flex items-center justify-center
                     text-white font-semibold text-[18px] self-center rounded-md
                     my-4 hover:bg-light-brown'>Order Now</a>
            </div>

        </div>

    </div>
  )
}

export default ProductDetailPage