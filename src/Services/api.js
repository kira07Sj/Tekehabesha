import axios from "axios";

const API_Url = "http://127.0.0.1:8000/app"

export const getProducts = async () => {
    const res = await axios.get('${API_Url}/products/')
}