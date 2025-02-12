import React, {useState, useContext} from 'react'
import { AuthContext } from '../auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
    <div className='w-full h-full'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login