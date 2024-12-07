import React from 'react'
import { FooterLinks } from '../constants'

const Footer = () => {
  return (
   <section className='w-[100dvw] z-40 mt-[5rem] flex flex-col items-center justify-center bg-dark-brown'>
        <div className='w-full  bg-dark-brown flex max-md:flex-col items-start justify-around   p-[2rem]'>

            {FooterLinks.map((items)=>(

                <div key={items.id} className='flex flex-col items-start justify-center'>
                <a href="#Home"><h1 className='text-white font-bold text-[1.6rem] max-md:text-[1.2rem]'>{items.title}</h1></a>
                {items.TheLinks.map((Links)=>(
                    <a key={Links.id} href={Links.link} className='text-white my-2'>{Links.title}</a>
                ))}
                </div>
            ))}
           
        </div>
        <div className='flex items-center justify-center flex-wrap text-[14px] gap-5 pb-5'>
            <p className='text-white'>© {new Date().getFullYear()} TekeHabesha. All rights reserved.</p>
            <p className='text-white'>Powerd by @Kasma Digitals</p>
        </div>
   </section>
  )
}

export default Footer