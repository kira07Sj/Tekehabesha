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