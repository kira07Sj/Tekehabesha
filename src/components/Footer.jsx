import React from 'react'

const Footer = () => {
  return (
   <section className='w-[100dvw] z-40 mt-[5rem] '>
        <div className='w-full  bg-dark-brown flex max-md:flex-col items-start justify-around   p-[2rem]'>

            <div className='flex flex-col items-start justify-center'>
                <a href="#Home"><h1 className='text-white font-bold text-[2rem] max-md:text-[1.5rem]'>Teke Habesha</h1></a>
                <a href="#About" className='text-white my-2'>About Us</a>
                <a href="#About" className='text-white my-2'>Our Team</a>
                <a href="#Products" className='text-white my-2'>Products</a>
            </div>

            <div className='flex flex-col items-start justify-center'>
                <a href="#Home"><h1 className='text-white font-bold text-[1.6rem] max-md:text-[1.3rem]'>Support</h1></a>
                <a href="https://t.me/Kira07sj" className='text-white my-2'>Help Center</a>
                <a href="https://t.me/Kira07sj" className='text-white my-2'>FAQs</a>
                <a href="https://t.me/Kira07sj" className='text-white my-2'>Privecy Policy</a>
                <a href="https://t.me/Kira07sj" className='text-white my-2'>Terms of Service</a>
                
            </div>
            
            <div className='flex flex-col items-start justify-center'>
                <a href="#Home"><h1 className='text-white font-bold text-[2rem] max-md:text-[1.5rem]'>Teke Habesha</h1></a>
                <a href="#About" className='text-white my-2'>About Us</a>
                <a href="#About" className='text-white my-2'>Our Team</a>
                <a href="#Products" className='text-white my-2'>Products</a>
            </div>
            
        </div>
   </section>
  )
}

export default Footer