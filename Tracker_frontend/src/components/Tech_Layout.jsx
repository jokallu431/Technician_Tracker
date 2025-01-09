import React from "react";
import { Outlet, useNavigate } from "react-router";
import Sidebar from "./Sidebar";
import Main_Content from "./Main_Content";
import Topbar from "./Topbar";
import Page_heading from "./Page_heading";
import Card_Tiles from "./Card_Tiles";

const Tech_Layout = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any cleanup if necessary
    navigate('/login');
  };
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          <Main_Content/>
          
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>

      {/* <!-- Logout Modal--> */}
      <div
        className="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                className="btn btn-primary "
                data-dismiss="modal"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech_Layout;
