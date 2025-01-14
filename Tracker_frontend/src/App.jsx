import "./App.css";
import ForgetPassword from "./components/ForgetPassword";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Tech_Dashboard from "./components/Tech_Dashboard";
import { BrowserRouter, Routes, Route } from "react-router";
import Tech_Layout from "./components/Tech_Layout";
import Pending_Task from "./components/Pending_Task";
import Completed_Task from "./components/Completed_Task";
import User_profile from "./components/User_profile";
import Profile from "./components/profile";
// import Profile from "./components/profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
          </Route>

          {/* Protected Routes */}
          <Route path="/dashboard" element={<Tech_Layout />}>
            <Route index element={<Tech_Dashboard />} />
            <Route path="pending" element={<Pending_Task />} />
            <Route path="completed" element={<Completed_Task />} />
            <Route path="profile" element={<User_profile />} />
            <Route path="profile_success" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
