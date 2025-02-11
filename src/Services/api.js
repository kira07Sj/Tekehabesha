import axios from "axios";


export const getProducts = async () => {
    try {
        const res = await axios.get('https://tekehabesha-backend.onrender.com/products/')
        return res.data // this will return the list of the products
    } catch (error) {
        console.error("Error fetching the data", error);
        throw error
    }
}

export const postProducts = async (formData) => {
    try {
        const res = await axios.post('https://tekehabesha-backend.onrender.com/products/', formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("Product created:", res.data);
     
    } catch (error) {
        if (error.response) {
            console.error("Response Data:", error.response.data); // Debug response error
            
        } else {
            console.error("Error:", error.message);
           
        }
    }
};

export const deleteProduct = async (ProductId) => {
    try {
       await axios.delete('https://tekehabesha-backend.onrender.com/product-number/' + ProductId + '/')
       
    } catch (error) {
        console.error("Error deleting the product:", error);
        alert("Failed to delete product");
    }
}