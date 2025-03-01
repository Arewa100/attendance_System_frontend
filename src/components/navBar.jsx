const NavBar = ()=> {
    return(
        <>
        <div className="tablets: max-w-full mobile-screen:bg-[#006600] tablets:h-[136px] pt-9 mobile-screen:h-[40px]">
                <div className="xl: h-[9px] xl: max-w-full mobile-screen: bg-white "></div> {/* //headline */}

                <div className="tablets: max-w-full bg-red-800 tablets: h-[120px] flex justify-between items-center mobile-screen:h-[30px]">
                    <div className="flex justify-between items-center bg-white tablets: h-full ml-[40px]">
                        <img src="src/assets/images/logo.svg" alt="yabatech logo" />
                        <div>this is text beside it</div>
                    </div>
    
                    <div>this is the butoons div</div>
                </div>
    
        </div>
        </>
    )
}

export default NavBar