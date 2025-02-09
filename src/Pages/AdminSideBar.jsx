    import React,{useState, useContext} from 'react'
    import { AuthContext } from '../auth/AuthContext';
    import { DashboardNavs } from '../constants';
    import { Link } from 'react-router-dom';
    import tilet from '../assets/tilet.png'
    
    const AdminSideBar = () => {
        const [ActiveId, SetActiveId] = useState('1')
        const { logout } = useContext(AuthContext);
        

        const Toggle = (ItemsId)=>{
            if(ActiveId != ItemsId){
                SetActiveId(ItemsId)
            }
            
        }
      return (
        <section className=' '>
           
           <div className=' fixed top-0 right-10 max-md:right-3 -z-20'>
                            <img src={tilet} alt="bg" 
                            className=' h-[700px]  object-contain scale-110  lg:scale-150' />
                    </div>
            <div className='w-[200px] h-[100dvh] fixed z-50 top-0 left-0 lg:flex
            sidebar hidden items-center justify-start flex-col overflow-hidden'>
                <h1 className='font-bold text-dark-brown mt-[2rem]'>Teke <span className='font-semibold'>Habesha</span></h1>
                
                
                <div className=' w-full flex flex-col items-center justify-center mt-[1rem]'>
                    {DashboardNavs.map((items)=>(
                        <Link to={items.URL} onClick={()=>Toggle(items.id)}  key={items.id} className='w-full h-[40px] flex flex-row items-center gap-4 cursor-default'>
                            <div className={`${ActiveId == items.id ? ' flex':'hidden'} h-[40px] w-[13px] rounded-lg bg-dark-brown absolute md:-left-2 max-md:-left-2 transition-all menuAnime`}/>
                            <div className='w-[20px] h-[20px] bg-black ml-6'></div>
                            <h1 className='text-[1rem]'>{items.name}</h1>
                        </Link>
                    ))}
                    
                </div>
                <button onClick={logout} className='btn-bg-brown text-white rounded-md px-5 py-1
                    absolute z-40 bottom-3'>Logout</button>
            </div>

            <div className='w-[100%]  z-50 top-0 left-0 lg:hidden
            sidebar flex items-center justify-start flex-col overflow-hidden'>
                <div className='flex items-center justify-between px-3 w-[90%]  mt-[2rem]'>
                    <h1 className='font-bold text-dark-brown '>Teke <span className='font-semibold'>Habesha</span></h1>
                    <button onClick={logout} className='btn-bg-brown text-white rounded-md px-5 py-1 max-md:text-[12px]
                    '>Logout</button>                    
                </div>
                
                
                <div className=' w-full  flex flex-rowitems-center justify-center mt-[1rem]'>
                    
                    {DashboardNavs.map((items)=>(
                        <Link to={items.URL} onClick={()=>Toggle(items.id)}  key={items.id} className='w-full h-[40px] flex flex-row items-center gap-4 max-sm:gap-2 cursor-default'>
                            <div className={`${ActiveId == items.id ? ' flex':'hidden'} h-[40px] w-[200px] max-sm:w-[120px] -z-10  rounded-t-md bg-orange-600/30 absolute `}/>
                            <div className='w-[20px] h-[20px] bg-black ml-6 max-sm:ml-2'></div>
                            <h1 className='text-[1rem] max-sm:text-[13px]'>{items.name}</h1>
                        </Link>
                    ))}
                    
                </div>
            </div>           

            
        </section>
      )
    }
    
    export default AdminSideBar
