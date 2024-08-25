import searchIcon from '../assets/search.png';
import menuIcon from '../assets/Menu.png';
import globe from '../assets/globe.png'
import LanguageSelector from './LanguageSelector '
import backArrow from '../assets/back-arrow.png'
import { useState } from 'react';
import { useEffect } from 'react';
import Aos from "aos"
import 'aos/dist/aos.css'

const Navbar = () => {

    useEffect(()=>{
        Aos.init({duration: 500})
    },[])

    const [openNav, setOpenNav] = useState(false);

    const toggle = () => {
        setOpenNav(!openNav);
    }

    return (
        <nav className='fixed flex w-full py-4 px-2 justify-between items-center'>
            <h1 className='font-san sm:text-[16px] text-color-brown font-semibold'>
                <span className='font-bold'>Teke </span>Habesha
            </h1>
            <div className='hidden lg:flex lg:flex-row relative left-1/5 gap-16'>
                <a className="text-color-brown font-normal" href="#Home">Home</a>
                <a className="text-color-brown font-normal" href="#Product">Product</a>
                <a className="text-color-brown font-normal" href="#About">About</a>
                <a className="text-color-brown font-normal" href="#Service">Service</a>
            </div>

            <div className='flex justify-center items-center gap-2'>
                <div className='md:w-[350px] h-[35px] rounded-3xl bg-light-brown overflow-hidden
                 flex items-center justify-between max-sm:w-[230px] xxs gap-5'>
                    <input type="text" name="search" id="search" className="w-[102%] h-[102%] bg-transparent 
                    max-sm:placeholder:text-[12px] text-black outline-none 
                    px-6 custom-input" placeholder="Search for 100+ products..." />
                    <div className='relative right-1 w-[35px] h-[20px]'>
                        <button type='submit'>
                            <img src={searchIcon} width={24} height={24} alt="" className="object-cover w-full h-full" />
                        </button>
                    </div>
                </div>

                <div className='w-[120px] h-[35px] bg-light-brown lg:flex hidden rounded-3xl justify-center items-center'>
                    <div>
                        <img src={globe} alt="globe" />
                    </div>
                    <LanguageSelector />
                </div>
            </div>

            <div className='flex lg:hidden w-[35px] mx-1'>
                <img onClick={toggle} src={menuIcon} alt="Menu" />
            </div>

            {openNav && (
                <div className='fixed w-full h-full top-0 left-0
                 backdrop-blur-sm' data-aos="fade-left">
                    <div className='w-[48%] h-full absolute top-0 right-0 bg-dark-brown flex flex-col gap-3'>
                        <div className='flex flex-col justify-center items-start'>
                            <div className='opacity-75'>
                                <img onClick={() => setOpenNav(false)} 
                                src={backArrow} width={24} height={24} alt="Back" className='w-[45px] ml-4 mt-[2rem]' />
                            </div>
                            <div className='flex flex-col w-full'>
                                <a className="navlinks" href="#Home">Home</a>
                                <a className="navlinks" href="#Product">Product</a>
                                <a className="navlinks" href="#About">About</a>
                                <a className="navlinks" href="#Service">Service</a>
                            </div>
                            <div className='w-[120px] h-[35px] bg-light-brown lg:hidden flex rounded-3xl justify-center items-center absolute bottom-2 right-11'>
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
