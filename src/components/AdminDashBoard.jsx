import Footer from "./footer"
import NavBar from "./navBar"
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import Button from "../resusables/button"


const AdminDashBoard = ()=> {
    let navigate = useNavigate();
    const handleCancelButton = ()=> {
        navigate("/");
    }
     
    return(
        <>
        <div className="xl:max-w-[1440px] m-auto min-h-screen flex flex-col">
            <NavBar firstButtonText="Logout" secondButtonText="Home"/>
            <div className="w-full m-auto min-h-screen flex items-center justify-around">
                <section className="relative bg-green-100 mobile-screen:w-full flex justify-center items-center">
                    <div className="bg-[#1F3A1F] tablets:h-[490px] tablets:w-[600px] mobile-screen:w-full mobile-screen:h-[400px] bg-opacity-75 rounded-[12px] relative flex mt-[80px] justify-around shadow-radial-sm-less-noticeable">
            
                        <div className="absolute inset-0 bg-[url('src/assets/images/backImg.svg')] bg-center bg-no-repeat bg-[length:400px_400px] opacity-10 z-0 "></div>
                
                        <div className="relative z-10 tablets:w-[750px] mobile-screen:w-full h-[87px] flex justify-around">

                            <div className="bg-[#1F3A1F] tablets:h-[490px] tablets:w-full mobile-screen:w-full mobile-screen:h-[400px] bg-opacity-75 rounded-[12px]">

                                <div className="h-6 w-full mt-2">

                                    <motion.button whileTap={{scale:0.2}} onClick={handleCancelButton} className="tablets:ml-[570px] mobile-screen:ml-[290px] text-[#FDC800]">
                                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </motion.button>

                                </div>

                                <div className="h-10 w-full flex justify-around text-[#FDC800] font-medium text-[25px] font-roboto"><p>Dashboard</p></div>
                                <div  className="h-[200px] mt-8 w-full flex flex-col justify-between items-center ">
                                    <Button textContent="Register Student" style=" outline-none tablets:w-[520px] mobile-screen:w-[300px] h-[40px] bg-[#FDC800] text-[15px] text-[#1c2312] font-roboto rounded-md shadow-sm font-medium hover:bg-[#1F3A1F] hover:text-[#FDC800] transition duration-[0.1s] shadow-md bg-[rgba(246,238,238,0.1)] "/>
                                    <Button textContent="Check Attendance History" style=" outline-none tablets:w-[520px] mobile-screen:w-[300px] h-[40px] bg-[#FDC800] text-[15px] text-[#1c2312] font-roboto rounded-md shadow-sm font-medium hover:bg-[#1F3A1F] hover:text-[#FDC800] transition duration-[0.1s] shadow-md bg-[rgba(246,238,238,0.1)]"/>
                                    <Button textContent="Cumulative History" style=" outline-none tablets:w-[520px] mobile-screen:w-[300px] h-[40px] bg-[#FDC800] text-[15px] text-[#1c2312] font-roboto rounded-md shadow-sm font-medium hover:bg-[#1F3A1F] hover:text-[#FDC800] transition duration-[0.1s] shadow-md bg-[rgba(246,238,238,0.1)]"/>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>

            <Footer/>
        </div>
        </>
    )
}


export default AdminDashBoard