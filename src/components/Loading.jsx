import React from 'react'

const Loading = ({className}) => {
  return (
    <div className={ `${className} flex absolute w-[60px] h-[60px] bg-dark-brown rounded-full items-center
     justify-center z-10 overflow-hidden` }>
        <div className=' animate-spin'>
        <div className='h-[50px] w-[25px] bg-light-brown mb-7 '></div>
        </div>
        <div className='w-[40px] h-[40px] bg_Primary z-20 absolute bg-light-brown rounded-full '></div>
     </div>
  )
}

export default Loading