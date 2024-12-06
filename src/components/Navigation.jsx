import searchIcon from '../assets/search.png';
import menuIcon from '../assets/Menu.png';
import globe from '../assets/globe.png'
import LanguageSelector from './LanguageSelector '
import backArrow from '../assets/back-arrow.png'
import { useState } from 'react';
import { useEffect } from 'react';
import Aos from "aos"
import 'aos/dist/aos.css'
import { navLinks } from '../constants';
import SearchBar, {SearchBar2} from './SearchBar';


const Navbar = () => {

    useEffect(()=>{
        Aos.init({duration: 500})
    },[])

    const [openNav, setOpenNav] = useState(false);
    const [OpenSearchBar, setOpenSearchBar] = useState(false);
    

    const toggle = () => {
        setOpenNav(!openNav);
    }

    return (
        <nav className={`fixed flex w-full py-4 px-6 justify-between z-50
         items-center ${openNav ? ' scroll-0' : 'backdrop-blur-sm'}`}>
            <div className='w-full h-full bg_Primary fixed top-0 left-0 opacity-50 -z-10'/>
            <h1 className='font-san sm:text-[20px] text-color-brown font-semibold'>
                <span className='font-bold'>Teke </span>Habesha
            </h1>
            <div className='hidden lg:flex lg:flex-row relative left-1/5 gap-16'>
                {navLinks.map((items)=>(
                    <a key={items.id} className="text-color-brown navHover font-bold" href={items.url}>{items.title}</a>
                ))}
            </div>

            <div className='flex justify-center items-center gap-2 max-sm:hidden'>
                
                <SearchBar/>
                <div className='w-[120px] h-[35px] bg-light-brown lg:flex hidden rounded-3xl justify-center items-center'>
                    <div>
                        <img src={globe} alt="globe" />
                    </div>
                    <LanguageSelector />
                </div>
            </div>

            <SearchBar2 onClickX={()=>setOpenSearchBar(false)} className={`fixed  z-30 ${OpenSearchBar ? 'flex':'hidden'}`}/>

            <div className='flex items-center justify-center gap-4 lg:hidden'>
                <img onClick={()=>setOpenSearchBar(true)} src={searchIcon} width={24} height={24} alt="" className=" w-[32px] h-[32px] z-50" />
                <div className='lg:hidden w-[35px]'>
                    <img onClick={toggle} src={menuIcon} alt="Menu" />
                </div>
            </div>

            {openNav && (
                <div className='fixed w-full h-full top-0 left-0
                 backdrop-blur-sm z-50' data-aos="fade-left">
                    <div className='w-[48%] h-full absolute top-0 right-0 bg-dark-brown flex flex-col gap-3'>
                        <div className='flex flex-col justify-center items-start'>
                            <div className='opacity-75'>
                                <img onClick={() => setOpenNav(false)} 
                                src={backArrow} width={24} height={24} alt="Back" className='w-[45px] ml-4 mt-[2rem]' />
                            </div>
                            <div onClick={()=> setOpenNav(false)} className='flex flex-col w-full'>
                                {navLinks.map((items)=>(
                                     <a key={items.id} className="navlinks" href={items.url}>{items.title}</a>
                                ))}
                            </div>
                            <div className='w-[120px] h-[35px] bg-light-brown lg:hidden flex rounded-3xl justify-center items-center absolute bottom-4 right-7'>
                                <div>
                                    <img src={globe} alt="globe" />
                                </div>
                                <LanguageSelector />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
