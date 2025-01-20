import "./App.css";
import ForgetPassword from "./components/ForgetPassword";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Tech_Dashboard from "./components/Tech_Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Tech_Layout from "./components/Tech_Layout";
import Pending_Task from "./components/Pending_Task";
import Completed_Task from "./components/Completed_Task";
import User_profile from "./components/User_profile";
import Profile from "./components/Profile";
import User_list from "./components/User_list";
import Create_Branch from "./components/Create_Branch";
import Create_Task from "./components/Create_Task";
import Technician_List from "./components/Technician_List";
import Edit_Task from "./components/Edit_Task";
import Unassigned_Task from "./components/Unassigned_Task";
import Assigned_Task from "./components/Assigned_Task";
import Add from "./components/Add";
import Views from "./components/Views";
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
            <Route path="createTask" element={<Create_Task />} />
            <Route path="edit" element={<Edit_Task />}/>
            <Route path="technicianlist" element={<Technician_List />} />
            <Route path="createBranch" element={<Create_Branch />} />
            <Route path="unassigned" element={<Unassigned_Task />} />
            <Route path="assigned" element={<Assigned_Task />} />
            <Route path="profile" element={<User_profile />} />
            <Route path="getprofile" element={<Profile />} />
            <Route path="userlist" element={<User_list />} />
            {/* <Route path="edit" element={<Add/>} /> */}
            <Route path="view/:id" element={<Views/>} />
            <Route path="delete" element={<Profile />} />
            {/* <Route path="userlist/add/:id" element={<User_profile />}></Route> */}
            {/* <Route path="add" element={<User_profile />} />
            <Route path="view" element={<Completed_Task />} />
            <Route path="delete" element={<Profile />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
