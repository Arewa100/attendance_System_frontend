import NavBar from "./navBar";
import Footer from "./footer";
const AttendanceData = ()=> {
    
    return(
        <>
          <div className="xl:max-w-[1440px] m-auto min-h-screen flex flex-col">
            <NavBar firstButtonText="Logout" secondButtonText="Back" firstNavigation="/" secondNavigation="/dashboard"/>
            <section className="flex-grow relative">
                <div className="h-full w-full relative flex justify-around min-h-screen ">
        
                    <div className=" absolute inset-0 bg-[url('src/assets/images/backImg.svg')] bg-center bg-no-repeat bg-[length:400px_400px] opacity-10"></div>
            
                    <div className="relative z-10 w-[750px] mb-8">
                        <h1 className="font-extralight text-[25px] text-center text-[#1E1E1E] underline">Student Attendance Record</h1>

                        <div className="h-[120px] w-full mt-4 mb-4">
                            <p className="font-semibold font-roboto">Matric Number: <span className="font-light">F/ND/20/34/30013</span></p>
                            <p className="font-semibold font-roboto">Student Name: <span className="font-light"> Olasoyin Miracle</span></p>
                            <p className="font-semibold font-roboto" >Department: <span className="font-light">Mechanical Engineering</span></p>
                            <p className="font-semibold font-roboto" >Attendance Starting Date: <span className="font-light">12:03:2010</span></p>
                            <p className="font-semibold font-roboto" >Attendance Ending Date: <span className="font-light">25:04:2010</span></p>
                        </div>
                        

                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg flex-auto">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-700 dark:bg-opacity-75">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                S/N
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Attendance date
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Time
                                            </th>
                                        </tr>
                                    </thead>

                                    {/* this is where integration begins */}
                                    <tbody className="text-white">
                                        <tr class=" odd:dark:bg-opacity-75 odd:dark:bg-[#1F3A1F] even:bg-white even:dark:bg-[#1F3A1F] dark:border-gray-700 border-gray-200">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                1
                                            </th>
                                            <td class="px-6 py-4">
                                                Silver
                                            </td>
                                            <td class="px-6 py-4">
                                                Laptop
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                    {/* integration for it to increment by itself */}
                                </table>
                            </div>


                    </div>
                </div>
            </section>

            <Footer/>
        </div>
        </>
    )
}

export default AttendanceData;