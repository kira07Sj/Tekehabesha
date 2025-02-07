import React, { useState, useEffect } from 'react';
import kemis from '/assets/products/1.jpg';
import tilet from '../assets/tilet.png';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`http://localhost:8000/product-details/${id}/`);
          if (res.ok) {
            const data = await res.json();
            setProduct(data);
          } else {
            console.error("Failed to fetch product");
          }
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchProduct();
    }, [id]);
  
    if (isLoading) {
      return <Loading/>;
    }
  
    if (!product) {
      return <div>Product not found!</div>;
    }

  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div className="absolute top-0 right-10 max-md:right-3 -z-10">
        <img
          src={tilet}
          alt="bg"
          className="h-[700px] object-contain scale-110 lg:scale-150"
        />
      </div>
      {isLoading && <Loading/>}
      <div className="w-full flex md:flex-row flex-col items-center justify-center gap-5 mt-[6rem] max-md:mt-[2rem]">
        <div className="w-[400px] h-[500px] rounded-lg overflow-hidden max-md:scale-[0.8] bg-dark-brown shadow-xl">
          <img src={`http://localhost:8000/${product.Image}`} className='object-contain' alt={product.title} /> {/* Product image */}
        </div>
        <div className="flex flex-col items-start h-full justify-center w-[500px] max-sm:w-[80%] md:ml-[2rem]">
          <h1 className="text-dark-brown text-[1.5rem] md:text-[2.3rem] font-bold my-3">
            {product.title} {/* Product title */}
          </h1>
          <p className="md:text-[18px] py-3 opacity-75">{product.description}</p> {/* Product description */}
          <div className="flex items-center justify-center flex-row gap-5">
            <p className="text-dark-brown text-[20px] md:text-[2rem]">
              Price: <span className="font-semibold line-through">{product.price}</span>
            </p>
            <p className="text-dark-brown font-semibold text-[20px] md:text-[2rem]">
              Discount: <span className="font-bold">{product.discount}</span> {/* Show discount */}
            </p>
          </div>

          <a
            href="https://t.me/Tekehabesha"
            className="w-[100%] h-[50px] hover:bg-light-brown bg-dark-brown flex items-center justify-center text-white font-semibold text-[18px] self-center rounded-md my-4 hover:bg-light-brown"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
