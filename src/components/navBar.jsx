import Button from "../resusables/button"

const NavBar = ()=> {
    return(
        <>
        <div className="mobile-screen:bg-[#006600] tablets:h-[136px] pt-9 mobile-screen:max-w-full">
                <div className="xl: h-[9px] tablets: max-w-full mobile-screen: bg-white "></div> {/* //headline */}

                <div className=" mobile-screen:h-[40px] tablets:h-full flex justify-between items-center mobile-screen:max-w-full">
                    <div className="bg-red-500 flex justify-between items-center  mobile-screen:h-full mobile-screen:ml-0 tablets:ml-[40px] gap-4">
                        <img className="mobile-screen:h-10 tablets:h-[101px]" src="src/assets/images/logo.svg" alt="yabatech logo" />
                        <div className="text-[24px] text-[#FDC800] font-roboto">Yabatech Student Attendance...</div>
                    </div>
                    {/* i am here  */}
                    <div className="bg-slate-500 w-[300px] h-full flex items-center"><Button textContent="Login" style="bg-red-400"/></div>  
                </div>
    
        </div>
        </>
    )
}

export default NavBar