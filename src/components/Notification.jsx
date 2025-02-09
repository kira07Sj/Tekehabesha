import React, {useEffect,useState}from 'react'
import Loading from './Loading'
import Aos from 'aos'


const Notification = ({success,warning,yesBtnOnClick, noBtnOnClick}) => {

    useEffect(()=>{
            Aos.init({duration: 500})
        },[])
    
    const [IsWarning , SetIsWarning] = useState(true)
    
    
  return (
    <div className={` flex items-center flex-col justify-start w-[300px] h-[250px] rounded-md bg-light-brown
     shadow-md lg:right-1/2 lg:absolute`} data-aos="fade-down" >
        <h1 className={`${warning} text-brown text-[1.2rem] font-bold text-center p-4`}>Are you sure you want to delete this Product ?</h1>
        <h1 className={`${success} text-brown text-[1.5rem] font-bold text-center p-4`}>Product Added Successfully!</h1>
        <Loading className={`mt-[6rem]`}/>
        <div className={`${warning} mt-[5rem] w-[70%] flex items-center justify-between`}>
            <button onClick={yesBtnOnClick} className='text-white p-3 px-8 btn-bg-brown rounded-md' >Yes</button>
            <button onClick={noBtnOnClick} className='text-white p-3 px-8 btn-bg-brown rounded-md' >No</button>
        </div>
        <button onClick={noBtnOnClick} className={` ${success} text-white p-3 px-8 btn-bg-brown rounded-md mt-[5rem]`} >Okey</button>
       
     </div>
  )
}

export default Notification