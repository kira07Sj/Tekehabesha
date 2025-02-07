import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { useState, useEffect } from 'react'
import {getProducts} from '../Services/api'
import tilet from '../assets/tilet.png'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'


const Dashboard = ({className}) => {

  const [products,SetProducts] = useState([])
  const [isLoading, SetIsLoading] = useState(true)

  useEffect(()=>{
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
    }

    fetchProducts()
  }, [])

  if (isLoading) return <Loading/>

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
              <Link key={items.id} >
                <Card  title={items.title} Price={items.price} imgUrl={`http://127.0.0.1:8000/${items.Image}`}/>
              </Link>
            ))}
          </div>
        ) : (<div className=' flex items-center justify-center flex-wrap'> 
            <P>No Products Found</P>
          </div>)}
                
    </div>
  )
}

export default Dashboard