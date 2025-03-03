import Button from "../resusables/button"
import { Link } from "react-router-dom"
const LoginPage = ()=> {

    return(
        <>
          <div className="xl:max-w-[1440px] m-auto min-h-screen flex items-center justify-around">
            <section className="relative">
                <div className="bg-[#1F3A1F] h-[420px] w-[600px] bg-opacity-75 rounded-[12px] relative flex mt-[80px] justify-around shadow-radial-sm-less-noticeable">
        
                    <div className="absolute inset-0 bg-[url('src/assets/images/backImg.svg')] bg-center bg-no-repeat bg-[length:400px_400px] opacity-10 z-0 "></div>
            
                    <div className="relative z-10 w-[750px] h-[87px] flex justify-around">

                        <div className="bg-[#1F3A1F]  h-[420px] w-full bg-opacity-75 rounded-[12px]">

                            <div className="h-6 w-full mt-2">

                                <button className="ml-[570px] text-[#FDC800]">
                                    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>

                            </div>

                            <div className="h-10 w-full flex justify-around text-[#FDC800] font-medium text-[36px] font-roboto"><p>Login</p></div>
                            <div  className="h-[140px] mt-8 w-full flex flex-col justify-between items-center">
                                <input className="w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Username"/>
                                <input className="w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="password" placeholder="Enter Password" />
                            </div>
                            <div className="h-[42px] w-full mt-10 flex justify-around items-center">
                                <Button textContent="Login" style="h-[42px] w-[150px] bg-[#FDC800] text-[17px] text-[#1F3A1F] font-roboto rounded-[12px] shadow-sm font-medium hover:bg-[#1F3A1F] hover:text-[#FDC800] transition duration-[0.1s] shadow-md"/>
                            </div>

                            <div className="flex justify-around items-center mt-7">
                                <p className="font-thin text-[#7d7f7d] text-[14px]">Don't have an account?<Link to={'/signup'}><span className="text-[#FDC800]"> signup</span></Link></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default LoginPage