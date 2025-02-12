import React, {useState, useContext} from 'react'
import { AuthContext } from '../auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import tilet from '../assets/tilet2.png'
import image3 from '../assets/image3.png'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://tekehabesha-backend.onrender.com/login/", { username, password });
            login(res.data.access); // Store token
            navigate("/admin/dashboard"); // Redirect after login
        } catch (error) {
            console.error("Login failed:", error);
            alert("Invalid credentials");
        }
    };

  return (
    <div className='w-[100%] h-[100dvh] flex items-center justify-start  flex-col lg:flex-row md:px-[3rem]'>
        <div className=' fixed top-0 right-10 max-md:right-3 -z-10 h-full'>
                <img src={tilet} alt="bg" 
                className='h-[615px] object-contain scale-100  lg:scale-150' />
        </div>
        <div className='w-60% max-md:w-[90%] h-full flex items-center justify-center flex-col lg:flex-row md:gap-x-[10rem]' >
        <div className='h-[90%] w-[420px] rounded-lg overflow-hidden max-md:hidden'>
            <img src={image3} alt="" className='w-full'/>
        </div>
        <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col gap-[1.6rem]'>
            <h1 className='text-color-brown text-[2.4rem] font-bold'>Login to Account</h1>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} required className='w-[310px] h-[35px] bg-transparent border rounded-md outline-none'/>
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required className='w-[310px] h-[35px] bg-transparent border rounded-md outline-none'/>
            <button type='submit' className='w-[310px] h-[40px] bg-transparent rounded-md outline-none text-white text-[14px] font-semibold btn-bg-gradient'>Log in</button>
        </form>
        </div>
    </div>
  )
}

export default Login