import React from 'react'
import BillBoardImg from '../assets/discountBg.png'
import Kemis from '../assets/main-habesha.png'
import Button from './Button'
import BillBoradImgRight from '../assets/img1.png'
import { Link } from 'react-router-dom'

const Billboard = () => {
  return (
    <div className='w-full flex items-center justify-center py-[3rem]'>
        <img src={Kemis} alt="" className='absolute left-3 mt-4 max-sm:scale-50 max-sm:-left-[3rem] z-30' />
        <div className='w-full h-[200px] max-sm:h-[145px] bg-dark-brown overflow-hidden'>

        <div className=' flex flex-col items-start justify-center absolute left-[6rem] mt-3 md:left-[12rem]'>
            <div className='flex items-center justify-center '>
                <h1 className='text-[1.7rem] md:text-[3rem] text-white font-bold'>15%</h1>
                <p className='font-bold ml-3 md:text-[1.4rem] text-[.8rem] text-white mt-2'>Discount</p>
            </div>
            <p className=' text-white text-[11px] md:text-[16px] md:w-[40%] w-[50%] max-md:w-[96%]  '>Don't miss out on these incredible saving. Shop now and 
                embrace the elegance of Ethiopian fashion for less!
            </p>
        </div>
        
            <img src={BillBoardImg} alt="" className=' object-cover opacity-15 max-md:h-full'/>
        </div>
        <div className='w-[420px] h-[60px] max-sm:w-[260px] max-sm:h-[40px] max-md:rounded-r-[0px]  rounded-[60px] bg_Primary mt-[5.5rem] 
        absolute flex items-center justify-start max-md:justify-center md:gap-5 md:pl-[1.5rem] overflow-hidden
         max-md:right-0 lg:-ml-[10rem]'>
        
        <Link to="/Product">
            <Button title={"Get Products"} className={`text-white w-[144px] max-sm:ml-2 max-sm:scale-[.7] h-[35px]
            btn-bg-brown  rounded-3xl`}/>
        </Link>

        <Link to="/Service">
            <Button title={"Service"} className={`text-white w-[144px]  max-sm:scale-[.7] h-[35px] max-sm:-ml-4 max-md:ml-[2rem]
            btn-bg-brown  rounded-3xl`}/>
        </Link>

        </div>

        <div className=' items-center justify-center hidden xl:flex'>
                <div className='bg_Primary w-[255px] h-[380px] absolute left-[50%] -rotate-[30deg] ml-[4rem]'/>
                <div className='w-[260px] h-[220px] absolute left-[70%] -mt-2'>
                    <img src={BillBoradImgRight} alt="" className='object-cover z-30 ' />
                </div>
                <p className='text-white text-[16px] absolute z-20 w-[13%] h-[210px] right-5 mt-[3rem]'>Don't miss out on these incredible saving.
                     Shop now and embrace the elegance of Ethiopian 
                     fashion for less!
                </p>
                <Link to="/Service" className=' absolute right-0 mt-[6rem] z-20'>
                    <Button title={"More service"} className={`text-dark-brown w-[144px]  h-[35px] bg_Primary  rounded-[40px] rounded-r-none`}/>
                </Link>
        </div>
    </div>
  )
}

export default Billboard