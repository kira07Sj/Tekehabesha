import React from 'react'
import searchIcon from '../assets/search.png';

const SearchBar = ({className}) => {
  return (
            <div className={`${className || ''} md:w-[350px] h-[35px] rounded-3xl bg-light-brown overflow-hidden
                flex items-center justify-between max-sm:w-[230px] xxs gap-5`}>
                    <input type="text" name="search" id="search" className="w-[102%] h-[102%] bg-transparent 
                    max-sm:placeholder:text-[12px] text-black outline-none 
                    px-6 custom-input" placeholder="Search for 100+ products..." />
                    <div className='relative right-1 w-[35px] h-[20px]'>
                        <button type='submit'>
                            <img src={searchIcon} width={24} height={24} alt="" className="object-cover w-full h-full" />
                        </button>
                    </div>
                    
         </div>
  )
}

export default SearchBar

export const SearchBar2 = ({className, onClickX}) => {
    return (
              <div className={`${className || ''} w-[90%] h-[40px] rounded-3xl bg-light-brown overflow-hidden
                  flex items-center justify-between   gap-5`}>
                      <input type="text" name="search" id="search" className="w-[102%] h-[102%] bg-transparent 
                      max-sm:placeholder:text-[12px] text-black outline-none 
                      px-6 custom-input" placeholder="Search for 100+ products..." />
                      
                      <i onClick={onClickX} class='bx bx-x text-[2rem] absolute right-1'></i>
           </div>
    )
  }
  
  