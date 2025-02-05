import React from 'react'

const Loading = () => {
  return (
    <div className=' flex absolute w-[60px] h-[60px] bg-light-brown rounded-full items-center
     justify-center z-10 overflow-hidden '>
        <div className=' animate-spin'>
        <div className='h-[40px] w-[20px] bg-dark-brown mb-7 '></div>
        </div>
        <div className='w-[40px] h-[40px] bg_Primary z-20 absolute rounded-full '></div>
     </div>
  )
}

export default Loading