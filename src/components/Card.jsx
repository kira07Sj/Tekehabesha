import React from 'react'
import Teke from '/assets/products/TekeG5-1.jpg'

const Card = () => {
  return (
    <div className='flex items-center justify-center flex-col 
    w-[250px] h-[400px] bg-dark-brown rounded-md overflow-clip'> 
        <div className='w-full h-[80%] bg-black/45 rounded-md '>
            <img src={Teke} alt="" className=' w-full h-full' />
        </div>

        <div className='w-full h-[20%] '>

        </div>
        
    </div>
  )
}

export default Card