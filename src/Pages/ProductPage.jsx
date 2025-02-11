import React from 'react'
import Card from '../components/Card'
import { ProductInfo } from '../constants'
import Button from '../components/Button'
import { useState, useEffect } from 'react'
import {getProducts} from '../Services/api'
import tilet from '../assets/tilet.png'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading';

const ProductPage = () => {

  
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
    <section  className='flex flex-col items-center justify-center 
    w-full  py-[1rem] z-40 '>
      <div className=' absolute top-0 right-10 max-md:right-3 -z-10'>
            <img src={tilet} alt="bg" 
            className=' h-[700px]  object-contain scale-110  lg:scale-150' />
        </div>
      <div className='flex flex-col items-center justify-center 
    w-[70%] max-md:w-[80%] max-sm:w-[80%] z-40 mt-[5rem]'>
        <h1 className='font-bold text-color-brown text-[2rem]'>Products</h1>

        {products.length > 0 ? (
          <div className=' flex items-center justify-center flex-wrap'> 
            {products.map((items)=>(
              <Link key={items.id} to={`/ProductDetail/${items.id}`}>
                <Card  title={items.title} Price={items.price} imgUrl={`https://tekehabesha-backend.onrender.com/${items.Image}`}/>
              </Link>
            ))}
          </div>
        ) : (<div className=' flex items-center justify-center flex-wrap'> 
            No Product Added
          </div>)}   

        <div className='w-full flex flex-row gap-3 items-center justify-center my-4'>
            <Button title={'Previous'} className={`w-[100px] h-[45px] rounded-lg card_border`}/>
            <div className='w-[30px] h-[30px] bg-dark-brown flex items-center justify-center rounded-md card_border'>
              <p className='text-white font-semibold'>1</p>
            </div>

            <div className='w-[30px] h-[30px]  flex items-center justify-center rounded-md card_border'>
              <p className='text-dark-brown font-semibold'>2</p>
            </div>
            <div className='w-[30px] h-[30px]  flex items-center justify-center rounded-md card_border'>
              <p className='text-dark-brown font-semibold'>3</p>
            </div>
            <Button title={'Next'} className={`w-[100px] h-[45px] rounded-lg card_border`}/>
        </div>   
        </div>  
    </section>
  )
}

export default ProductPage