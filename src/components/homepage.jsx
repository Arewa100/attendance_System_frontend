import Footer from "./footer"
import NavBar from "./navBar"


const Home = ()=> {
     
    return(
        <>
        <div className="xl:max-w-[1440px] m-auto min-h-screen flex flex-col">
            <NavBar firstButtonText="Login" secondButtonText="Sign Up"/>
            <section className="flex-grow relative">
                <div className="h-full w-full relative flex items-center justify-around min-h-screen">
        
                    <div className="absolute inset-0 bg-[url('src/assets/images/backImg.svg')] bg-center bg-no-repeat bg-[length:400px_400px] opacity-10 z-0"></div>
            
                    <div className="relative z-10 w-[750px] h-[87px]">
                        <h1 className="font-extralight text-[25px] text-center text-[#1E1E1E]">"Effortlessly track student attendance and access detailed attendance history. Streamline your record-keeping and ensure accuracy with ease."</h1>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
        </>
    )
}


export default Home