import Footer from "./footer"
import NavBar from "./navBar"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import Button from "../resusables/button"
import { useState } from "react"
import apiClient from "../services/apiClient"

const AdminDashBoard = () => {
    let navigate = useNavigate();
    const handleCancelButton = () => {
        navigate("/");
    }

    const [currentStateRegisterStudent, setState] = useState(false);
    const [currentStateOfCheckAttendanceHistory, setStateOfAttendanceHistory] = useState(false);
    const [cumulativeHistory, setCumulativeHistoryState] = useState(false);
    const [historyData, setHistoryData] = useState({
        studentId: "",
        startDate: "",
        endDate: "",
    });
    const [userData, setData] = useState({
        firstName: "",
        lastName: "",
        matricNumber: "",
        cardId: "",
        department: "",
        email: ""
    });
    const [message, setMessage] = useState("");
    const [attendanceHistory, setAttendanceHistory] = useState([]); // New state for attendance data

    const handleClick = () => {
        setState(true);
    }

    const handleClickForAttendanceHistory = () => {
        setStateOfAttendanceHistory(true);
    }

    const handleClickForCumulativeHistory = () => {
        setCumulativeHistoryState(true);
    }

    const handleBackButton = () => {
        setState(false);
        setStateOfAttendanceHistory(false);
        setCumulativeHistoryState(false);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleHistoryinput = (event) => {
        const { name, value } = event.target;
        setHistoryData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmitToRegisterStudent = async (e) => {
        e.preventDefault();
        const postData = async (data) => {
            try {
                const response = await apiClient.post('staff/registerStudent/', data);
                if (response.data.message === "Student registered successfully") {
                    window.alert("Student registered successfully");
                }
            } catch (error) {
                setMessage(error.response?.data?.message || "Error registering student");
            }
        };
        postData(userData);
    }

    const handleSubmitForAttendanceHistory = async (e) => {
        e.preventDefault();
        console.log("submit for attendance history is working");
        const getAttendanceHistory = async (data) => {
            console.log(historyData);
            try {
                if (!data.studentId || !data.startDate || !data.endDate) {
                    throw new Error("All fields are required");
                }
                const dateRegex = /^(\d{2}):(\d{2}):(\d{4})$/;
                if (!dateRegex.test(data.startDate) || !dateRegex.test(data.endDate)) {
                    throw new Error("Dates must be in DD:MM:YYYY format (e.g., 12:03:2025)");
                }
                const studentIdRegex = /^[A-Za-z0-9/]+$/;
                if (!studentIdRegex.test(data.studentId)) {
                    throw new Error("Invalid student ID format");
                }

                const response = await apiClient.get('staff/getAttendanceHistory', {
                    params: {
                        studentId: data.studentId,
                        startDate: data.startDate,
                        endDate: data.endDate
                    }
                });

                setAttendanceHistory(response.data); // Store the response data
                setMessage("Attendance history retrieved successfully");
                // Navigate to AttendanceData page with data
                navigate('/attendance-record', {
                    state: {
                        attendanceData: response.data,
                        query: {
                            studentId: data.studentId,
                            startDate: data.startDate,
                            endDate: data.endDate,
                            studentName: response.data[0]?.studentName || "Unknown",
                        }
                    }
                });
            } catch (error) {
                const errorMessage = error.response?.data || error.message || "Error retrieving attendance history";
                setMessage(errorMessage);
                console.error('Error response:', error);
            }
        };

        getAttendanceHistory(historyData);
    };

    return (
        <>
            <div className="xl:max-w-[1440px] m-auto min-h-screen flex flex-col">
                <NavBar firstButtonText="Logout" secondButtonText="Home" firstNavigation="/" secondNavigation="/" />
                <div className="w-full m-auto min-h-screen flex items-center justify-around">
                    <section className="relative mobile-screen:w-full flex justify-center items-center mb-10">
                        <div className="bg-[#1F3A1F] tablets:h-[490px] tablets:w-[600px] mobile-screen:w-full mobile-screen:h-[400px] bg-opacity-75 rounded-[12px] relative flex mt-[80px] justify-around shadow-radial-sm-less-noticeable">
                            <div className="absolute inset-0 bg-[url('/backImg.svg')] bg-center bg-no-repeat bg-[length:400px_400px] opacity-10 z-0"></div>
                            <div className="relative z-10 tablets:w-[750px] mobile-screen:w-full h-[87px] flex justify-around">
                                <div className="bg-[#1F3A1F] tablets:h-[490px] tablets:w-full mobile-screen:w-full mobile-screen:h-[400px] bg-opacity-75 rounded-[12px]">
                                    <div className="h-6 w-full mt-2">
                                        <AnimatePresence>
                                            {!currentStateRegisterStudent && !currentStateOfCheckAttendanceHistory && !cumulativeHistory ? (
                                                <motion.button whileTap={{ scale: 0.2 }} onClick={handleCancelButton} className="tablets:ml-[570px] mobile-screen:ml-[290px] text-[#FDC800]">
                                                    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                    </svg>
                                                </motion.button>
                                            ) : null}
                                        </AnimatePresence>
                                    </div>
                                    <div className="h-6 w-full">
                                        <AnimatePresence>
                                            {currentStateRegisterStudent || currentStateOfCheckAttendanceHistory || cumulativeHistory ? (
                                                <motion.button whileTap={{ scale: 0.2 }} onClick={handleBackButton}>
                                                    <div className="h-10 absolute w-full flex justify-around text-red-600 text-[14px] font-medium"><p>{message}</p></div>
                                                    <div className="tablets:ml-[36px] mobile-screen:ml-[290px] text-[#FDC800]">
                                                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                                        </svg>
                                                    </div>
                                                </motion.button>
                                            ) : null}
                                        </AnimatePresence>
                                    </div>
                                    <div className="absolute w-full">
                                        <AnimatePresence>
                                            <form action="#" onSubmit={handleSubmitToRegisterStudent}>
                                                {currentStateRegisterStudent ? (
                                                    <motion.div className="w-full h-[200px] bg-opacity-75" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                        <div className="tablets:h-10 mobile-screen:h-2 w-full flex justify-around text-[#FDC800] font-medium text-[25px]"><p>Register Student</p></div>
                                                        <div className="tablets:h-[300px] mobile-screen:h-[250px] mt-4 w-full flex flex-col justify-between items-center">
                                                            <motion.input name="firstName" value={userData.firstName} onChange={handleChange} whileHover={{ scale: 1.03 }} className="tablets:w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Firstname" required />
                                                            <motion.input name="lastName" value={userData.lastName} onChange={handleChange} whileHover={{ scale: 1.03 }} className="tablets:w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Lastname" required />
                                                            <motion.input name="matricNumber" value={userData.matricNumber} onChange={handleChange} whileHover={{ scale: 1.03 }} className="tablets:w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Matric-Number" required />
                                                            <motion.input name="cardId" value={userData.cardId} onChange={handleChange} whileHover={{ scale: 1.03 }} className="tablets:w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Card Identification Number" required />
                                                            <motion.input name="department" value={userData.department} onChange={handleChange} whileHover={{ scale: 1.03 }} className="tablets:w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Department" required />
                                                            <motion.input name="email" value={userData.email} onChange={handleChange} whileHover={{ scale: 1.03 }} className="tablets:w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Email" required />
                                                        </div>
                                                        <div className="h-[42px] w-full mt-4 flex justify-around items-center">
                                                            <Button textContent="submit" style="outline-none h-[42px] w-[150px] bg-[#FDC800] text-[17px] text-[#1F3A1F] font-roboto rounded-[12px] shadow-sm font-medium hover:bg-[#1F3A1F] hover:text-[#FDC800] transition duration-[0.1s] shadow-md" />
                                                        </div>
                                                    </motion.div>
                                                ) : null}
                                            </form>
                                        </AnimatePresence>
                                    </div>
                                    <div className="absolute w-full">
                                        <AnimatePresence>
                                            <form action="#" onSubmit={handleSubmitForAttendanceHistory}>
                                                {currentStateOfCheckAttendanceHistory ? (
                                                    <motion.div className="w-full h-[200px] bg-opacity-75" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                        <div className="tablets:h-10 mobile-screen:h-2 w-full flex justify-around text-[#FDC800] font-medium text-[25px]"><p>Check Attendance History</p></div>
                                                        <div className="tablets:h-[200px] mobile-screen:h-[250px] mt-4 w-full flex flex-col justify-between items-center">
                                                            <motion.input name="studentId" value={historyData.studentId} onChange={handleHistoryinput} whileHover={{ scale: 1.03 }} className="tablets:w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Student Matric-Number" required />
                                                            <motion.input name="startDate" value={historyData.startDate} onChange={handleHistoryinput} whileHover={{ scale: 1.03 }} className="tablets:w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Attendance Starting Date (DD:MM:YYYY)" required />
                                                            <motion.input name="endDate" value={historyData.endDate} onChange={handleHistoryinput} whileHover={{ scale: 1.03 }} className="tablets:w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Attendance Ending Date (DD:MM:YYYY)" required />
                                                        </div>
                                                        <div className="h-[42px] w-full mt-10 flex justify-around items-center">
                                                            <Button textContent="submit" style="outline-none h-[42px] w-[150px] bg-[#FDC800] text-[17px] text-[#1F3A1F] font-roboto rounded-[12px] shadow-sm font-medium hover:bg-[#1F3A1F] hover:text-[#FDC800] transition duration-[0.1s] shadow-md" />
                                                        </div>
                                                    </motion.div>
                                                ) : null}
                                            </form>
                                        </AnimatePresence>
                                    </div>
                                    <div className="absolute w-full">
                                        <AnimatePresence>
                                            {cumulativeHistory ? (
                                                <motion.div className="w-full h-[200px] bg-opacity-75" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                    <div className="tablets:h-10 mobile-screen:h-2 w-full flex justify-around text-[#FDC800] font-medium text-[25px]"><p>Cumulative History</p></div>
                                                    <div className="tablets:h-[200px] mobile-screen:h-[250px] mt-4 w-full flex flex-col justify-between items-center">
                                                        <motion.input whileHover={{ scale: 1.03 }} className="tablets:w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Student Matric-Number" />
                                                        <motion.input whileHover={{ scale: 1.03 }} className="tablets:w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Attendance Starting Date" />
                                                        <motion.input whileHover={{ scale: 1.03 }} className="tablets:w-[520px] h-[40px] rounded-md p-4 outline-none font-roboto shadow-md bg-[rgba(246,238,238,0.1)] text-purple-200" type="text" placeholder="Enter Attendance Ending Date" />
                                                    </div>
                                                    <div className="h-[42px] w-full mt-10 flex justify-around items-center">
                                                        <Button textContent="submit" style="outline-none h-[42px] w-[150px] bg-[#FDC800] text-[17px] text-[#1F3A1F] font-roboto rounded-[12px] shadow-sm font-medium hover:bg-[#1F3A1F] hover:text-[#FDC800] transition duration-[0.1s] shadow-md" />
                                                    </div>
                                                </motion.div>
                                            ) : null}
                                        </AnimatePresence>
                                    </div>
                                    <div className="h-10 w-full font-medium text-[25px] font-roboto text-green-950"><p></p></div>
                                    <AnimatePresence>
                                        {!currentStateRegisterStudent && !currentStateOfCheckAttendanceHistory && !cumulativeHistory ? (
                                            <motion.div className="h-[200px] mt-8 w-full flex flex-col justify-between items-center">
                                                <Button onClick={handleClick} textContent="Register Student" style="outline-none tablets:w-[520px] mobile-screen:w-[300px] h-[40px] bg-[#FDC800] text-[17px] text-purple-200 text-opacity-65 font-roboto rounded-md shadow-sm font-medium hover:bg-[#1F3A1F] hover:text-[#FDC800] transition duration-[0.1s] shadow-md bg-[rgba(246,238,238,0.1)]" />
                                                <Button onClick={handleClickForAttendanceHistory} textContent="Check Attendance History" style="outline-none tablets:w-[520px] mobile-screen:w-[300px] h-[40px] bg-[#FDC800] text-[17px] text-purple-200 text-opacity-65 font-roboto rounded-md shadow-sm font-medium hover:bg-[#1F3A1F] hover:text-[#FDC800] transition duration-[0.1s] shadow-md bg-[rgba(246,238,238,0.1)]" />
                                                <Button onClick={handleClickForCumulativeHistory} textContent="Cumulative History" style="outline-none tablets:w-[520px] mobile-screen:w-[300px] h-[40px] bg-[#FDC800] text-[17px] text-purple-200 text-opacity-65 font-roboto rounded-md shadow-sm font-medium hover:bg-[#1F3A1F] hover:text-[#FDC800] transition duration-[0.1s] shadow-md bg-[rgba(246,238,238,0.1)]" />
                                            </motion.div>
                                        ) : null}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default AdminDashBoard