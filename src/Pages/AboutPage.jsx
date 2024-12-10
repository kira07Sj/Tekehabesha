import React from 'react'
import Button from '../components/Button'
import AboutBg from '../assets/discountBg.png'

const AboutPage = () => {
  return (
    
    <section  className='flex flex-col items-center justify-center w-full  py-[2rem]'>
        <div className='w-[60%] max-sm:w-[80%] flex flex-col items-center justify-center mt-[5rem]'>
            <h1 className='font-bold text-color-brown text-[2rem]'>About</h1>
              <div className='overflow-hidden rounded-lg my-5 '>
                 <img src={AboutBg} alt="" />
              </div>
            <p className='text-justify text-color-brown max-sm:text-[14px]'>
                Welcome to Teka Habesha, your premier destination for authentic
                 traditional Ethiopian clothing. Our shop is dedicated to 
                 preserving and celebrating the rich cultural heritage of 
                 Ethiopia through exquisite garments that embody the artistry
                  and history of our people. Inspired by the timeless elegance
                   of traditional Ethiopian attire, we set out to create a space
                    where people can experience and appreciate the beauty of our
                     heritage. At Heritage Threads, we offer a curated selection
                      of traditional Ethiopian garments, including the iconic 
                      Shamma, vibrant Tibeb, and intricately embroidered Habesha
                       Kemis. Each piece is handcrafted by skilled artisans using 
                       traditional techniques passed down</p>
                

                
        </div>
    </section>
  )
}

export default AboutPage