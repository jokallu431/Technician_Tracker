import logo from "../assets/Tech-Logo.png";
import { Link, useNavigate } from "react-router";
const Sidebar = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => () => {
    navigate(path);
  };
  return (
    <>
      {/* <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            {/* <i className="fas fa-laugh-wink"></i> */}
            <img className="" src={logo} alt="..." />
          </div>
          <div className="sidebar-brand-text mx-3">
            Tech<sub>Trace</sub>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Admin Dashboard</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            onClick={() => navigate("/dashboard")}
            data-toggle="collapse"
            data-target="#Task"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Task</span>
          </Link>
          <div
            id="Task"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Task Classification:</h6>
              {/* <button
                className="nav-link collapse-item"
                onClick={navigateTo("/dashboard/pending")}
              >
                <i className="fas fa-fw fa-tasks"></i>
                <span>Pending Tasks</span>
              </button> */}
              <button
                className="collapse-item btn btn-outline-light"
                onClick={navigateTo("/dashboard/createTask")}
              >
                Create Task
              </button>
              <button
                className="collapse-item btn btn-outline-light"
                onClick={navigateTo("/dashboard/editTask")}
              >
                Edit Task
              </button>
              <button
                className="collapse-item btn btn-outline-light"
                onClick={navigateTo("/dashboard/pending")}
              >
                Pending Task
              </button>
              <button
                className="collapse-item btn btn-outline-light"
                onClick={() => navigate("/dashboard/completed")}
              >
                Completed Task
              </button>
              <button
                className="collapse-item btn btn-outline-light"
                onClick={() => navigate("/dashboard/unassigned")}
              >
                Unassigned Task
              </button>
              <button
                className="collapse-item btn btn-outline-light"
                onClick={() => navigate("/dashboard/assigned")}
              >
                Assigned Task
              </button>
            </div>
          </div>
        </li>
        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            onClick={() => navigate("/dashboard")}
            data-toggle="collapse"
            data-target="#Branch"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Branches</span>
          </Link>
          <div
            id="Branch"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Branches Classification:</h6>
              <button
                className="collapse-item btn btn-outline-light"
                onClick={navigateTo("/dashboard/createBranch")}
              >
                Create Branches
              </button>
              <button
                className="collapse-item btn btn-outline-light"
                onClick={navigateTo("/dashboard/technicianlist")}
              >
               Technician List
              </button>
              
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#User"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-user"></i>
            <span>User Profile</span>
          </a>
          <div
            id="User"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">User Classification:</h6>
              <button
                className="collapse-item btn btn-outline-light"
                onClick={() => navigate("/dashboard/profile")}
              >
                Create User
              </button>
              <button
                className="collapse-item btn btn-outline-light"
                onClick={() => navigate("/dashboard/pending")}
              >
                User List
              </button>
              
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Addons</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <button
                className="collapse-item btn btn-outline-light"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="collapse-item btn btn-outline-light"
                onClick={() => navigate("/forgetpassword")}
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </li>
      </ul>
      {/* <!-- End of Sidebar --> */}
    </>
  );
};

export default Sidebar;
