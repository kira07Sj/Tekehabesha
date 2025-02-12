import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { useState, useEffect } from 'react'
import {getProducts, deleteProduct} from '../Services/api'
import tilet from '../assets/tilet.png'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import deleteIcon from '/assets/Icons/delete.png'
import Notification from '../components/Notification'


const Dashboard = ({className}) => {

  const [products,SetProducts] = useState([])
  const [isLoading, SetIsLoading] = useState(true)
  const [warning, SetWarning] = useState(false)

  useEffect(() => {
    fetchProducts();
}, []);

const fetchProducts = async () => {
try {
        const data = await getProducts()
        SetProducts(data)
      } catch (error) {
        console.error("Error fetching products", error)
      }
      finally{
        SetIsLoading(false)
      }
};

const handleDelete = async (productId) => {
    await deleteProduct(productId);
    SetProducts(products.filter(product => product.id !== productId)); // Remove deleted product from state
};


  if (isLoading) return <Loading className={`left-1/2 top-1/2`}/>

 

  return (
    
    <div className={`${className} w-[85%] h-full  
            flex items-start justify-start flex-col right-1 lg:absolute pb-5 max-md:items-center max-md:justify-start max-md:absolute max-md:right-7`}>
           <div className=' absolute top-0 right-10 max-md:right-3 -z-10 '>
                       <img src={tilet} alt="bg" 
                       className=' h-[700px]  object-contain scale-110  lg:scale-150' />
            </div>
            <h1 className='font-bold text-color-brown text-[2rem]'>Admin Dashboard</h1>


            
            {products.length > 0 ? (
          <div className=' flex items-center justify-center flex-wrap'> 
            {products.map((items)=>(
              <>
                <div className={`${warning ? 'flex':'hidden'} w-[100dvw] h-[100dvh] top-0 left-[10rem] fixed z-40 backdrop-blur-sm flex 
                items-center justify-center`}>
                <Notification
                  success={`hidden`}
                  warning={`flex`}
                  warning2={`hidden`}
                  yesBtnOnClick={()=>{
                    handleDelete(items.id)
                    SetWarning(false)
                  }}
                  noBtnOnClick={()=>SetWarning(false)}
              />
              </div>
              <Link key={items.id} >
                <button  onClick={()=>handleDelete(items.id)} className='bg-white rounded-full h-[35px] w-[35px] overflow-hidden flex items-center justify-center
                 absolute mt-[2rem] ml-[2rem] z-30'>
                  
                  <img src={deleteIcon} alt="delete" className='w-[60%]'/>
                  </button>
                <Card  title={items.title} Price={items.price} imgUrl={`https://tekehabesha-backend.onrender.com/${items.Image}`}/>
              </Link>
              </>
            ))}
          </div>
        ) : (<div className=' flex items-center justify-center flex-wrap'> 
            No Products Found
          </div>)}
                
    </div>
  )
}

export default Dashboard