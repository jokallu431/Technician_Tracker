// import React from "react";
import Topbar from "./Topbar";
import Card_Tiles from "./Card_Tiles";
import Page_heading from "./Page_heading";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Main_Content = () => {
  return (
    <>
      {/* <!-- Main Content --> */}
      <div id="content">
        <Topbar />

        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">
          <Page_heading />
          <Card_Tiles />
          <Outlet/>
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