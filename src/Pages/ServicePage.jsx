import React from 'react'
import tilet from '../assets/tilet.png'

const ServicePage = () => {
  return (
    <section  className='flex flex-col items-center justify-center w-full  py-[2rem]'>
        <div className=' absolute top-0 right-10 max-md:right-3 -z-10'>
            <img src={tilet} alt="bg" 
            className=' h-[700px]  object-contain scale-110  lg:scale-150' />
        </div>
        <div className='w-[60%] max-sm:w-[80%] flex flex-col items-center justify-center mt-[5rem]'>
            <h1 className='font-bold text-color-brown text-[2rem]'>Our Service</h1>
             
            <p className='text-justify text-color-brown max-sm:text-[14px]'>
            At Teka Habesha, we take pride in offering a range of services that allow 
            you to immerse yourself in the rich traditions and cultural beauty of Ethiopia. 
            Each service is designed to connect you with the heritage and artistry of 
            Ethiopian fashion while delivering a personalized and authentic experience.</p>
                
            <div className='flex items-center justify-center flex-col md:flex-row'>

            </div>
                
        </div>
    </section>
  )
}

export default ServicePage