import AdminDashBoard from "../components/AdminDashBoard";
import AttendanceData from "../components/attendanceData";
import Home from "../components/homepage";
import LoginPage from "../components/loginpage";
import SignUpPage from "../components/signup";

const routes = [
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/login",
        element: <LoginPage/>
    },
    {
        path:"/signup",
        element: <SignUpPage/>
    },
    {
        path:"/dashboard",
        element:<AdminDashBoard/>
    },
    {
        path:"/attendance-record",
        element:<AttendanceData/>
    }
]

export default routes