import NavBar from "./navBar";
import Footer from "./footer";
import { useLocation } from "react-router-dom";

const AttendanceData = () => {
    const { state } = useLocation();
    const { attendanceData = [], query = {} } = state || {};
    const { studentId = "Unknown", studentName = "Unknown", startDate = "Unknown", endDate = "Unknown" } = query;

    // Placeholder for department (fetch from API if needed)
    const department = "Mechanical Engineering"; // Replace with API call if department is stored elsewhere

    return (
        <>
            <div className="xl:max-w-[1440px] m-auto min-h-screen flex flex-col">
                <NavBar firstButtonText="Logout" secondButtonText="Back" firstNavigation="/" secondNavigation="/dashboard" />
                <section className="flex-grow relative">
                    <div className="h-full w-full relative flex justify-around min-h-screen">
                        <div className="absolute inset-0 bg-[url('/backImg.svg')] bg-center bg-no-repeat bg-[length:400px_400px] opacity-10"></div>
                        <div className="relative z-10 w-[750px] mb-8">
                            <h1 className="font-extralight text-[25px] text-center mt-5 text-[#1E1E1E] underline">
                                Student Attendance Record
                            </h1>

                            <div className="h-[120px] w-full mt-4 mb-4">
                                <p className="font-semibold font-roboto">
                                    Matric Number: <span className="font-light">{studentId}</span>
                                </p>
                                <p className="font-semibold font-roboto">
                                    Student Name: <span className="font-light">{studentName}</span>
                                </p>
                                <p className="font-semibold font-roboto">
                                    Department: <span className="font-light">{department}</span>
                                </p>
                                <p className="font-semibold font-roboto">
                                    Attendance Starting Date: <span className="font-light">{startDate}</span>
                                </p>
                                <p className="font-semibold font-roboto">
                                    Attendance Ending Date: <span className="font-light">{endDate}</span>
                                </p>
                            </div>

                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-700 dark:bg-opacity-75">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                S/N
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Attendance Date
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Time
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-white">
                                        {attendanceData.length > 0 ? (
                                            attendanceData.map((record, index) => (
                                                <tr
                                                    key={`${record.studentId}-${record.attendanceDate}-${record.attendanceTime}`}
                                                    className="odd:dark:bg-opacity-75 odd:dark:bg-[#1F3A1F] even:bg-white even:dark:bg-[#1F3A1F] dark:border-gray-700 border-gray-200"
                                                >
                                                    <th
                                                        scope="row"
                                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        {index + 1}
                                                    </th>
                                                    <td className="px-6 py-4">{record.attendanceDate}</td>
                                                    <td className="px-6 py-4">{record.attendanceTime}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr className="odd:dark:bg-opacity-75 odd:dark:bg-[#1F3A1F]">
                                                <td colSpan="3" className="px-6 py-4 text-center text-gray-900 dark:text-white">
                                                    No attendance records found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default AttendanceData;