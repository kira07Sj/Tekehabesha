import React from 'react'
import Button from './Button'
import Gabi from '../assets/image.png'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[60%] max-sm:w-[80%] py-[2rem]'>
        <div className='w-full flex flex-col items-center justify-center'>
            <h1 className='font-bold text-color-brown'>About</h1>
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
                <div className='flex flex-row justify-end items-center w-full mt-[1rem] -z-10'>
                    <div className='flex items-center justify-center '>
                    <Button title={"Read More"} className={`text-color-brown w-[184px] max-sm:scale-75 h-[35px]
                    btn-bg-orange  rounded-3xl mr-3 max-sm:-mr-8`}/>
                    </div>

                    <div>
                    <Button title={"Service"} className={`text-white w-[144px] max-sm:scale-75 h-[35px]
                    btn-bg-brown  rounded-3xl`}/>
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col  items-center justify-center w-full py-[2rem] gap-6'>
                        <div className='flex items-center justify-between rounded-lg h-[130px] w-full bg-dark-brown2 shadow-md'>
                            <div className='w-[120px] max-sm:w-[100px] h-[110px] max-sm:h-[90px] rounded-lg m-2  flex items-center justify-center'>
                                <img src={Gabi} className='object-contain' />
                            </div>

                            <div className='flex flex-col items-start justify-center gap-1 w-[70%]'>
                                <h1 className='text-[16px] max-sm:text-[14px]  text-color-brown font-bold'>A big discount on the new event</h1>
                                <p className='text-[14px] max-md:text-[13px] max-sm:text-[10px] w-[90%]'>Heritage Threads was founded with a passion for Ethiopian culture and a commitment to sharing it with the world.</p>
                            </div>
                            
                        </div>

                        <div className='flex flex-col items-start justify-center rounded-lg h-[130px] lg:w-[65%] w-full bg-dark-brown2 shadow-md'>
                            <div className='flex items-center justify-center ml-[2rem]'>
                                <h1 className='text-[2.4rem] font-bold'>15%</h1>
                                <p className='font-bold ml-3 mt-3'>Discount</p>
                            </div>
                            <p className='w-[90%] text-[13px] ml-[2rem]'>
                            Don't miss out on these incredible saving. Shop now and 
                            embrace the elegance of Ethiopian fashion for less!
                            </p>
                        </div>

                </div>
        </div>
    </div>
  )
}

export default About