import axios from "axios";


export const getProducts = async () => {
    try {
        const res = await axios.get('http://127.0.0.1:8000/products/')
        return res.data // this will return the list of the products
    } catch (error) {
        console.error("Error fetching the data", error);
        throw error
    }
}

export const postProducts = async (formData) => {
    try {
        const res = await axios.post('http://127.0.0.1:8000/products/', formData, {
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
       await axios.delete('http://localhost:8000/product-number/' + ProductId + '/')
       
    } catch (error) {
        console.error("Error deleting the product:", error);
        alert("Failed to delete product");
    }
}