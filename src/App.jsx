import { Routes, Route } from "react-router-dom"
import React from "react"
import LoginPage from "./components/loginpage"
import SignUpPage from "./components/signup"
import AdminDashBoard from "./components/AdminDashBoard"
import AttendanceData from "./components/attendanceData"
import Home from "./components/homepage"
import { ToastContainer } from "react-toastify"





const App = () => {
  return (
    <>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/login"  element={<LoginPage/>}/>
      <Route path="/signup"  element={<SignUpPage/>}/>
      <Route path="/dashboard"  element={<AdminDashBoard/>}/>
      <Route path="/attendance-record"  element={<AttendanceData/>}/>
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App





// import './App.css'
// import { createBrowserRouter, RouterProvider} from 'react-router-dom'
// import routes from './routes/routes'

// const router = createBrowserRouter([...routes])
// function App() {
//   return (
//     <>
//     <RouterProvider router={router}/>
//     </>
//   )
// }

// export default App
