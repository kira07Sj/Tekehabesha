import React,{useState} from 'react'
import {postProducts} from '../Services/api'



const Management = ({className}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [tags, setTags] = useState(""); // Store as a string
    const [image, setImage] = useState(null); // Store the file
    const [imagePreview, setImagePreview] = useState(null); // Store preview URL
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Ensure tags are formatted correctly
        const formattedTags = Array.isArray(tags) ? tags.join(",") : tags;
    
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("Image", image); // Image file
        formData.append("tags", formattedTags); // Tags as comma-separated string
    
        try {
            await postProducts(formData);
        } catch (error) {
            console.error("Failed to add product", error);
            alert("Error adding product!");
        }
    };
    
    // Handle file selection and preview
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file); // Store file for submission
            setImagePreview(URL.createObjectURL(file)); // Generate preview URL
        }
    };
    

      const [IsTagInputOpen, SetIsTagInputOpen] = useState(false)
  return (
    <div className={`${className} w-[85%] h-full  
            flex items-center justify-start flex-col right-2 lg:absolute pb-5`}>

               
                <form onSubmit={handleSubmit} className='w-full h-full'>
               <div className='w-full max-lg:w-[120%] h-[80px] flex items-center justify-between px-5 pr-10 ml-10 '>
                    <div className='flex items-center justify-center p-5 md:ml-5'>
                        <div className='w-5 h-5 bg-black'></div>
                        <h1 className='ml-4 max-md:text-[13px]'>Add new Product</h1>
                    </div>

                    <button type='submit' className='flex items-center justify-center bg-dark-brown rounded-lg p-1 px-9'>
                        <h1 className='text-white max-md:text-[12px]'>Save</h1>
                    </button>
                </div>

            <div className='flex items-start justify-center flex-row max-lg:flex-col  w-full h-full '>
                <div className='w-full flex flex-col items-center justify-center mx-[2rem]  gap-5'>
                        <div className='w-[100%] h-[320px] border-2 border-amber-950/5 rounded-md shadow-md backdrop-blur-[3px]
                         flex items-start justify-center flex-col px-5 gap-5'>
                            <h1 className='text-brown font-bold'>General Information</h1>

                            <div className='flex items-start justify-center w-full gap-3 flex-col'>
                                <label className='max-md:10px opacity-55' htmlFor="name">Product Name</label>
                                <input type="text" id='name' className='w-full h-[35px] bg-fade-orange outline-none rounded-md'
                                    value={title} onChange={(e) => setTitle(e.target.value)} required/>
                            </div>
                            <div className='flex items-start justify-center w-full gap-3 flex-col'>
                                <label className='max-md:10px opacity-55' htmlFor="name">Description</label>
                                <textarea type="text" name='name' className='w-full h-[120px] bg-fade-orange outline-none rounded-md'
                                    value={description} onChange={(e) => setDescription(e.target.value)} required />
                            </div>
                        </div>

                        <div className='w-[100%] h-[220px] border-2 border-amber-950/5 rounded-md shadow-md backdrop-blur-[3px] 
                        flex items-start justify-center flex-col px-5 gap-2'>
                            <h1 className='text-brown font-bold'>Pricing</h1>

                            <div className='flex items-start justify-center w-full gap-3 flex-col'>
                                <label className='max-md:10px opacity-55' htmlFor="name">Base Proce</label>
                                <input type="number" name='name' className='w-full h-[35px] bg-fade-orange outline-none rounded-md'
                                    value={price} onChange={(e) => setPrice(e.target.value)} required/>
                            </div>
                            <div className='flex items-start justify-center w-full gap-3 flex-col'>
                                <label className='max-md:10px opacity-55' htmlFor="name">Discount Percentage</label>
                                <input type="text" name='name' className='w-full h-[35px] bg-fade-orange outline-none rounded-md'/>
                            </div>

                        </div>

                    </div>

                    <div className='flex flex-col items-center justify-center mx-[2rem] gap-5 max-lg:w-full'>
                        <div className='w-[480px] h-[420px] border-2 border-amber-950/5 rounded-md shadow-md max-lg:w-[100%] max-lg:mt-10 backdrop-blur-[3px] 
                        flex items-start justify-center flex-col px-5'>
                            <h1 className='text-brown font-bold mt-2'>Product Media</h1>

                        <div className='flex items-start justify-center w-full h-full gap-3 flex-col'>
                            <label className='max-md:10px opacity-55' htmlFor="name">Product Photo</label>
                            <div className='flex flex-col-reverse items-center justify-center w-full h-[80%] rounded-md outline-dashed outline-stone-400/50'>
                                <input type="file" id='ImageInput' className='hidden' accept="image/*" 
                                    onChange={handleFileChange} required />
                                <label htmlFor="ImageInput" className='p-2 bg-orange-500 text-dark-brown rounded-md cursor-pointer hover:opacity-75'>Add Image</label>
                                {imagePreview && <img src={imagePreview} alt='Image Preview' className='w-[40%] max-md:w-[60%] mb-2'/>}
                            </div>
                        </div>
                        

                        </div>

                        <div className='w-[480px] h-[120px] border-2 border-amber-950/5 rounded-md shadow-md max-lg:w-[100%] 
                        backdrop-blur-[3px] flex items-center justify-start ScrollHidden'>
                            <div className='w-full h-full overflow-x-scroll flex items-center justify-start p-3'>
                                <p onClick={()=>{SetIsTagInputOpen(true)}} className={`btn-bg-brown px-3 py-1 rounded-md text-white cursor-pointer`}>Add Tags</p>
                            </div>
                            
                            <div className={`w-full h-full bg-light-brown z-20 absolute items-center justify-center ${IsTagInputOpen ? 'flex':'hidden'}`}>
                                <input type="text" className='h-[34px] rounded-md mr-3 outline-none' value={tags} placeholder='eg: Habesha kemis, Bridal kemis'
                                    onChange={(e) => setTags(e.target.value)}/>
                                <p onClick={()=>{SetIsTagInputOpen(false)}} className={`btn-bg-brown px-3 py-1 rounded-md text-white cursor-pointer`}>Add Tags</p>
                                </div>
                            </div>

                    </div>
            </div>

            </form>
                
    </div>
  )
}

export default Management