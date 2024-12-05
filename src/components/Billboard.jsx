import React from 'react'
import BillBoardImg from '../assets/discountBg.png'
import Kemis from '../assets/main-habesha.png'

const Billboard = () => {
  return (
    <div className='w-full flex items-center justify-center py-[3rem]'>
        <img src={Kemis} alt="" className='absolute left-3 mt-4 max-sm:scale-50 max-sm:-left-[3rem]' />
        <div className='w-full h-[200px] max-sm:h-[125px] bg-dark-brown overflow-hidden'>

        <div className=' flex flex-col items-start justify-center absolute left-[6rem] mt-3 md:left-[12rem]'>
            <div className='flex items-center justify-center'>
                <h1 className='text-[1.7rem] md:text-[3rem] text-white font-bold'>15%</h1>
                <p className='font-bold ml-3 md:text-[1.4rem] text-[.8rem] text-white mt-3'>Discount</p>
            </div>
            <p className=' text-white text-[11px] md:text-[16px] md:w-[40%] w-[50%] max-md:w-[96%]  '>Don't miss out on these incredible saving. Shop now and 
                embrace the elegance of Ethiopian fashion for less!</p>
        </div>
            <img src={BillBoardImg} alt="" className=' object-cover opacity-15 max-md:h-full'/>
        </div>
    </div>
  )
}

export default Billboard