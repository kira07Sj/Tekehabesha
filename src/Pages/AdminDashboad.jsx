    import React,{useState} from 'react'
    import tilet from '../assets/tilet.png';
    import { DashboardNavs } from '../constants';
    import Overview from '../components/Overview';
    import Management from '../components/Management';
    
    const AdminDashboad = () => {
        const [ActiveId, SetActiveId] = useState('1')
        

        const Toggle = (ItemsId)=>{
            if(ActiveId != ItemsId){
                SetActiveId(ItemsId)
            }
            
        }
      return (
        <section className='w-[100vw] lg:h-full bg_Primary  lg:fixed  left-0 top-0 z-50 flex max-lg:flex-col'>
            <div className="absolute top-0 right-10 max-md:right-3 -z-10">
                    <img
                      src={tilet}
                      alt="bg"
                      className="h-[700px] object-contain scale-110 lg:scale-150"
                    />
            </div>

            <div className='w-[200px] h-full z-50 top-0 left-0 lg:flex
            sidebar hidden items-center justify-start flex-col overflow-hidden'>
                <h1 className='font-bold text-dark-brown mt-[2rem]'>Teke <span className='font-semibold'>Habesha</span></h1>
                
                <div className=' w-full flex flex-col items-center justify-center mt-[1rem]'>
                    {DashboardNavs.map((items)=>(
                        <div onClick={()=>Toggle(items.id)}  key={items.id} className='w-full h-[40px] flex flex-row items-center gap-4 cursor-default'>
                            <div className={`${ActiveId == items.id ? ' flex':'hidden'} h-[40px] w-[13px] rounded-lg bg-dark-brown absolute md:-left-2 max-md:-left-2 transition-all menuAnime`}/>
                            <div className='w-[20px] h-[20px] bg-black ml-6'></div>
                            <h1 className='text-[1rem]'>{items.name}</h1>
                        </div>
                    ))}
                    
                </div>
            </div>

            <div className='w-[100%]  z-50 top-0 left-0 lg:hidden
            sidebar flex items-center justify-start flex-col overflow-hidden'>
                <h1 className='font-bold text-dark-brown mt-[2rem]'>Teke <span className='font-semibold'>Habesha</span></h1>
                
                <div className=' w-full  flex flex-rowitems-center justify-center mt-[1rem]'>
                    {DashboardNavs.map((items)=>(
                        <div onClick={()=>Toggle(items.id)}  key={items.id} className='w-full h-[40px] flex flex-row items-center gap-4 max-sm:gap-2 cursor-default'>
                            <div className={`${ActiveId == items.id ? ' flex':'hidden'} h-[40px] w-[200px] max-sm:w-[120px] -z-10  rounded-t-md bg-orange-600/30 absolute `}/>
                            <div className='w-[20px] h-[20px] bg-black ml-6 max-sm:ml-2'></div>
                            <h1 className='text-[1rem] max-sm:text-[13px]'>{items.name}</h1>
                        </div>
                    ))}
                    
                </div>
            </div>
            
            <div className='w-full '>
            <Overview className={`${ActiveId === '1' ? 'flex':'hidden'}`}/>
            <Management className={`${ActiveId === '2' ? 'flex':'hidden'}`}/>
            </div>             

            
        </section>
      )
    }
    
    export default AdminDashboad