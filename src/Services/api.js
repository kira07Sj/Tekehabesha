import axios from "axios";

const API_Url = "http://127.0.0.1:8000/app"

export const getProducts = async () => {
    try {
        const res = await axios.get('${API_Url}/products/')
        return res.data // this will return the list of the products
    } catch (error) {
        console.error("Error fatching the data", error);
        throw error
    }


}