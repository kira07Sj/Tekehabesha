
const Card = ({title, Price, imgUrl}) => {

  

  return (
    <div className='flex items-center justify-center flex-col card_border
    w-[250px] h-[400px] bg-dark-brown rounded-xl overflow-hidden m-3 '> 
        <div className='w-full h-[80%] bg-black/45  overflow-hidden'>
            
            <img src={imgUrl} alt="" className=' w-full h-full hover:scale-125 transition-all' />
        </div>

        <div className='w-full h-[20%] flex flex-col items-start justify-center'>
            <h1 className='text-white  text-[20px] font-bold pl-3'>{title}</h1>
            <div className='flex flex-row items-center justify-between px-3 w-full'>
              <p className='text-white'>More Details</p>
              <p className='font-bold text-white'>{Price} birr</p>

            </div>
        </div>
        
    </div>
  )
}

export default Card