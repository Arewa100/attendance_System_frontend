import Button from "../resusables/button"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"
import apiClient from "../services/apiClient"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const LoginPage = ()=> {

    let navigate = useNavigate();
    const handleCancelButton = ()=> {
        navigate("/");
    }
    
    const userDetails = {
        username: "",
        password: "",
    }

    const [userData, setData] = useState(userDetails);
    const [message, setMessage] = useState("")
    
    function handleChange(event) {
        const { name, value } = event.target;
        setData((preVData)=> {
          return {...preVData, [name]:value}  
        })
    }
    console.log(userData)

    const handleSubmit = async(e)=>{
        e.preventDefault()

        if (!userData.username || !userData.password) {
          toast.error("Please fill in all fields.");
          setMessage("Please fill in all fields.");
          return;
      }
           const postData = async (data) => {
        try {
          const response = await apiClient.post('staff/login/', data);
          if(response.data.message === "Logged in successfully") {
            toast.success("Logged in successfully");
            // console.log(response.data.message);
            navigate("/dashboard");
            
          }
        } catch (error) {
          setMessage(error.response.data);
        }
      };

      postData(userData);
      
      apiClient.interceptors.response.use(
        response => response,
        error => {
          // console.error('Error response:', error);
          // console.log(error)
          return Promise.reject(error);
        }
      );
          
      }


    return(
        <>
          <div className="xl:max-w-[1440px] m-auto min-h-screen flex items-center justify-around">
          <form action="#" onSubmit={handleSubmit}>
            <section className="relative">
                <div className="bg-[#1F3A1F] h-[420px] w-[600px] bg-opacity-75 rounded-[12px] relative flex mt-[80px] justify-around shadow-radial-sm-less-noticeable">
        
                    <div className="absolute inset-0 bg-[url('src/assets/images/backImg.svg')] bg-center bg-no-repeat bg-[length:400px_400px] opacity-10 z-0 "></div>
            
                    <div className="relative z-10 w-[750px] h-[87px] flex justify-around">

                        <div className="bg-[#1F3A1F]  h-[420px] w-full bg-opacity-75 rounded-[12px]">

                            <div className="h-6 w-full mt-2">

                                <motion.button whileTap={{scale:0.2}} onClick={handleCancelButton} className="ml-[570px] text-[#FDC800]">
                                    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>

                            </div>

                            <div className="h-10 w-full flex justify-around text-[#FDC800] font-medium text-[25px]"><p>Login</p></div>
                            <div className="h-10 w-full flex justify-around text-red-600 text-[14px] font-medium"><p>{message}</p></div>
                            <div  className="h-[140px] mt-8 w-full flex flex-col justify-between items-center">
                                <motion.input name="username" onChange={handleChange} whileHover={{scale:1.03}} className="w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Username"/>
                                <motion.input name="password" onChange={handleChange} whileHover={{scale:1.03}} className="w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="password" placeholder="Enter Password" />
                            </div>
                            <div className="h-[42px] w-full mt-10 flex justify-around items-center">
                                <Button textContent="Login" style=" outline-none h-[42px] w-[150px] bg-[#FDC800] text-[17px] text-[#1F3A1F] font-roboto rounded-[12px] shadow-sm font-medium hover:bg-[#1F3A1F] hover:text-[#FDC800] transition duration-[0.1s] shadow-md"/>
                            </div>

                            <div className="flex justify-around items-center mt-5">
                                <p className="font-thin text-[#7d7f7d] text-[14px]">Don't have an account?<Link to={'/signup'}><span className="text-[#FDC800]"> signup</span></Link></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            </form>
        </div>
        </>
    )
}

export default LoginPage