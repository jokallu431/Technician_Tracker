

import './App.css'
import ForgetPassword from './components/ForgetPassword';
import Layout from './components/Layout'
import Login from './components/Login'
import Signup from './components/Signup';
import Tech_Dashboard from './components/Tech_Dashboard'
import {BrowserRouter, Routes, Route} from 'react-router';
// import Delete from './components/Delete'
// import Form from './components/Form'
// import User_profile from './components/User_profile'
// import Update from './components/Update'

function App() {
  


  return (
  <>
  {/* <div className='task'> 
  <Login/>
  <Layout/>
   <div id="wrapper">
    <Tech_Dashboard/>
    </div>
      <User_profile/>
      </div> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index="/login"  element={<Login/>}></Route>
              <Route path="/login"  element={<Login/>}></Route>
              <Route path="/signup"  element={<Signup/>}></Route>
              <Route path="/forgetpassword"  element={<ForgetPassword/>}></Route>
              <Route path="/dashboard"  element={<Tech_Dashboard/>}></Route>
          </Route>
          
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
