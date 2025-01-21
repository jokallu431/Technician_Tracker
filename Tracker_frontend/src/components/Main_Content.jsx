import React from "react";
import Topbar from "./Topbar";
import Card_Tiles from "./Card_Tiles";
import Footer from "./Footer";
import { Outlet ,useLocation} from "react-router";
import { useState } from "react";

const Main_Content = () => {
  
  const location = useLocation(); 
  const isDashboard = location.pathname.includes("dashboard/");
  return (
    <>
      {/* <!-- Main Content --> */}
      <div id="content">
        <Topbar />

        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">
           {/* Conditional Rendering */}
          {isDashboard ? <Outlet/>:<Card_Tiles/> }

          <Footer />
          {/* <!-- Content Row --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </div>
      {/* <!-- End of Main Content --> */}
    </>
  );
};

export default Main_Content;