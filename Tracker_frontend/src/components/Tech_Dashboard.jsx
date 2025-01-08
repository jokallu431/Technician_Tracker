import React from 'react'
import "../css/Tech_Dashboard.css";
import { Link,useNavigate  } from 'react-router';
import Sidebar from './Sidebar';
import Main_Content from './Main_Content';
import Footer from './Footer';
const Tech_Dashboard = () => {

    let navigate = useNavigate();
  return (
    <>
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
            <Sidebar/>
        {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
                <Main_Content/>
                <Footer/>
            </div>
            {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
        </a>

        {/* <!-- Logout Modal--> */}
        <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <button className="btn btn-primary " data-dismiss="modal" onClick={() => {
          navigate("/login");
        }} >Logout</button>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Tech_Dashboard;