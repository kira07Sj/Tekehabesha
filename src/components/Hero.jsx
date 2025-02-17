import tilet from '../assets/tilet.png'
import Button from './Button'
import mainHabesha from '../assets/main-habesha.png'
import locationIcon from '../assets/location.png'
import { Link } from 'react-router-dom'

const Hero = () => {

  return (
    <section id='Home' className='flex flex-col w-[100%] justify-center 
    items-center pb-[3rem]'>
        <div className=' absolute top-0 right-10 max-md:right-3 -z-10'>
            <img src={tilet} alt="bg" 
            className=' h-[700px]  object-contain scale-110  lg:scale-150' />
        </div>

        <div className='w-[85%]  justify-between
         py-10 sm:mt-[10rem] mt-[7rem] flex flex-col lg:flex-row gap-6 items-center'>

            <div className='flex flex-col justify-center items-start
             max-sm:items-center sm:pl-[2rem]'>
                <div className='absolute w-[184px] h-[174px] -mt-11 orange__gradient 
                rounded-full opacity-70 -z-10'/>
                <h1 className='font-extrabold text-color-brown text-[28px]
                sm:text-[48px]' >
                    Threads of Tradition,<br />
                    Woven with Elegance
                </h1>

                <p className='text-[18px] max-sm:text-[14px] mt-3 font-medium' >
                    Threads of Tradition, Woven with 
                    Elegance
                </p>

                <Link to='/Product'>
                <Button title={"Shop Now"} className={`text-white w-[144px] h-[42px]
                 btn-bg-brown mt-6 font-medium rounded-xl`}/>
                </Link>
                
                 
            </div>

            <div className='items-center justify-center flex max-sm:mt-5 max-sm:ml-[2rem]'>
                
                <div>
                    <img src={mainHabesha} className='z-[20]' width={280} alt="mainHabesha" />
                </div>

                <div className=' relative sm:-top-[5.5rem] -top-10 right-[4.3rem]  
                sm:right-[6rem] z-10 min-w-[290px] min-h-[220px] max-sm:min-w-[160px] max-sm:min-h-[100px]  flex flex-col
                 HomeHabesha items-center justify-start rounded-md'>
                    <h1 className='text-dark-brown text-[1.6rem] font-bold md:mt-6
                     max-md:text-[1rem] w-[70%]'>A big discount for Chritsmass</h1>
                    <p className='w-[75%] max-md:text-[12px]'>Buy now and get more discounts in the future</p>
                    <Link to='/Product'><Button title={'Order Now'} className={`btn-bg-orange  rounded-lg font-bold max-sm:scale-75
                         absolute -right-8 bottom-8 max-sm:bottom-2  p-2 text-[1.2rem] hover:scale-95 transition-all`}/>
                    </Link>
                    <div className=' absolute top-0 left-0 w-full h-full bg-dark-brown2  opacity-50 -z-10'/>
                </div>
            </div>

        </div>
        <div className='flex flex-row max-sm:hidden items-center 
        justify-between w-[80%] mb-[2rem] '>
                <p className='w-[35%]'>
                Beyond its aesthetic appeal, the Shamma holds deep cultural meaning. 
                It is a symbol of Ethiopian identity and pride,
                </p>

                <div className='flex items-center justify-center'>
                    <img src={locationIcon} alt="Location" width={32} />
                    <p>Shiro Meda mall, Shop 371</p>
                </div>
        </div>
      
    </section>
  )
}

export default Hero
