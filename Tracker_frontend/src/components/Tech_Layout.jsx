import React from "react";
import { useNavigate } from "react-router";
import Sidebar from "./Sidebar";
import Main_Content from "./Main_Content";
import sidebarData from "./Data";
import { useEffect,useState } from "react";

const Tech_Layout = () => {
    const navigate = useNavigate();
    let [roleSpecificSidebarData, setRoleSpecificSidebarData] = useState([]);
    const [role, setRole] = useState("Admin");
    
    useEffect(() => {
      setRole(localStorage.getItem("role"));
    },[]);
    
useEffect(() => {
  setRoleSpecificSidebarData(role == "Admin" ? sidebarData.Admin : sidebarData.Technician); 
},[role]);

  const handleLogout = () => {
    // Perform any cleanup if necessary
    localStorage.clear();
    navigate('/login');
  };
  return (
    <>
      <div id="wrapper">
        <Sidebar sidebarData={roleSpecificSidebarData} />
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
