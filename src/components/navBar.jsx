import Button from "../resusables/button"

const NavBar = ()=> {
    return(
        <>
        <div className="mobile-screen:bg-[#006600] tablets:h-[136px] pt-9 mobile-screen:max-w-full">
                <div className="xl: h-[9px] tablets: max-w-full mobile-screen: bg-white "></div> {/* //headline */}

                <div className=" mobile-screen:h-[40px] tablets:h-full flex justify-between items-center mobile-screen:max-w-full">
                    <div className="flex justify-between items-center  mobile-screen:h-full mobile-screen:ml-0 tablets:ml-[40px] gap-4">
                        <img className="mobile-screen:h-10 tablets:h-[63px] " src="src/assets/images/logo.svg" alt="yabatech logo" />
                        <div className="tablets:text-[24px] mobile-screen:text-[10px] text-[#FDC800] font-roboto ">Yabatech Student Attendance...</div>
                    </div>
    
                    <div className=" tablets:w-[300px] tablets:h-full tablets:flex tablets:items-center tablets:gap-[20px] mobile-screen:hidden">
                        <Button textContent="Login" style="h-[42px] w-[100px] bg-[#FDC800] text-[17px] text-[#3A1B1B] font-roboto rounded-[12px] shadow-sm font-medium hover:bg-[#1F3A1F] hover:text-[#FDC800] transition duration-[0.1s]"/>
                        <Button textContent="Sign Up" style="h-[42px] w-[100px] bg-[#1F3A1F] text-[17px] text-[#FDC800] font-roboto rounded-[12px] shadow-sm font-medium hover:bg-[#FDC800] hover:text-[#1F3A1F] transition duration-[0.1s]"/>

                    </div>  
                </div>
    
        </div>
        </>
    )
}

export default NavBar