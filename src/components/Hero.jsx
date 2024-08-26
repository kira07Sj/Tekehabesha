import tilet from '../assets/tilet.png'
import Button from './Button'
import mainHabesha from '../assets/main-habesha.png'
import homeHabesha from '../assets/home-habesha-txt.png'
import locationIcon from '../assets/location.png'


const Hero = () => {

  return (
    <section id='Home' className='flex flex-wrap w-[100%] justify-center overflow-hidden
    items-center'>
        <div className=' absolute top-0 -right-0 -z-10'>
            <img src={tilet} alt="bg" 
            className=' h-[700px]' />
        </div>

        <div className='w-[85%]  justify-between
         py-10 sm:mt-[10rem] mt-[7rem] flex flex-wrap gap-6 items-center'>

            <div className='flex flex-col justify-center items-start
             max-sm:items-center sm:pl-[2rem]'>
                <div className='absolute w-[184px] h-[174px] -mt-11 orange__gradient 
                rounded-full opacity-70 -z-10'/>
                <h1 className='font-extrabold text-color-brown text-[32px]
                sm:text-[48px]' >
                    Threads of Tradition,<br />
                    Woven with Elegance
                </h1>

                <p className='text-[18px] mt-3 font-medium' >
                    Threads of Tradition, Woven with 
                    Elegance
                </p>

                <div>
                <Button title={"Shop Now"} className={`text-white w-[144px] h-[42px]
                 btn-bg-brown mt-6 font-medium rounded-xl`}/>
                </div>
                 <div className='absolute w-[200px] h-[200px] rounded-full 
                 ml-[16rem] mt-[16rem] brown__gradient opacity-50 -z-10'/>
            </div>

            <div className='items-center justify-center flex max-sm:mt-5 max-sm:ml-[2rem]'>
                <div className='absolute w-[220px] h-[174px] mb-[22rem] mr-[4rem] orange__gradient 
                rounded-full opacity-70 -z-10'/>
                <div>
                    <img src={mainHabesha} className='z-[20]' width={280} alt="mainHabesha" />
                </div>

                <div className='relative  sm:-top-[5.5rem] -top-10 right-[4.3rem]  sm:right-[6rem] -z-10'>
                    <img src={homeHabesha} className=' scale-110' alt="" />
                </div>
            </div>

            <div className='sm:flex hidden justify-between flex-wrap w-full'>
                <p className=' text-color-brown relative items-center -z-10
                 pt-[5rem]'>
                    Beyond its aesthetic appeal, the Shamma holds 
                    deep cultural <br /> meaning. It is a symbol of Ethiopian 
                    identity and pride,
                </p> 

                <div className='flex flex-row items-center justify-center pt-[4rem] pr-[4rem]'>
                    <img src={locationIcon} width={35} alt="" />
                    <p className='font-semibold'>Shiro Meda mall, Shop 371</p>
                    <div className='absolute w-[200px] h-[200px] rounded-full 
                 ml-[13rem] mt-[12rem] brown__gradient opacity-60 -z-10'/>
                </div>

            </div>

        </div>
      
    </section>
  )
}

export default Hero
