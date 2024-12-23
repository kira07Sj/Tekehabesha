import React from 'react'

const Management = ({className}) => {
  return (
    <div className={`${className} w-[90%] h-full  top-0 left-0
            flex items-center justify-start flex-col `}>
               <div className='w-full h-[80px] flex items-center justify-between px-5 pr-10'>
                    <div className='flex items-center justify-center p-5'>
                        <div className='w-5 h-5 bg-black'></div>
                        <h1 className='ml-4'>Add new Product</h1>
                    </div>

                    <button className='flex items-center justify-center bg-dark-brown rounded-lg p-1 px-9'>
                        <h1 className='text-white'>Save to draft</h1>
                    </button>
                </div>

            <div className='flex items-start justify-center flex-row max-md:flex-col  w-full h-full '>
                <div className='w-full flex flex-col items-center justify-center mx-[2rem] max-md:mx-[1.3rem] gap-5'>
                        <div className='w-[100%] h-[320px] border-2 border-amber-950/5 rounded-md shadow-md'>

                        </div>

                        <div className='w-[100%] h-[220px] border-2 border-amber-950/5 rounded-md shadow-md'>

                        </div>

                    </div>

                    <div className='flex flex-col items-center justify-center mx-[2rem] gap-5'>
                        <div className='w-[480px] h-[520px] border-2 border-amber-950/5 rounded-md shadow-md'>

                        </div>

                        <div className='w-[480px] h-[120px] border-2 border-amber-950/5 rounded-md shadow-md'>

                        </div>

                    </div>
            </div>
                
    </div>
  )
}

export default Management