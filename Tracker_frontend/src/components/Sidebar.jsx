import logo from "../assets/Tech-Logo.png";
import { Link, useNavigate } from "react-router";
const Sidebar = ({sidebarData}) => {
  const navigate = useNavigate();
  return (
    <>
      {/* <!-- Sidebar --> */}
    
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <img className="" src={logo} alt="..." />
        </div>
        <div className="sidebar-brand-text mx-3">
          Tech<sub>Trace</sub>
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      {sidebarData.map((item, index) => (
        <li key={index} className="nav-item">
          {item.subMenu.length > 0 ? (
            <>
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls={`collapse${index}`}
              >
                <i className={item.icon}></i>
                <span>{item.title}</span>
              </a>
              <div
                id={`collapse${index}`}
                className="collapse"
                aria-labelledby={`heading${index}`}
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">{item.title} Classification:</h6>
                  {item.subMenu.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      className="collapse-item btn btn-outline-light"
                      onClick={() => navigate(`${subItem.link}`)}
                    >
                      {subItem.title}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <a
              className="nav-link"
              href={item.link}
              onClick={() => navigate(item.link)}
            >
              <i className={item.icon}></i>
              <span>{item.title}</span>
            </a>
          )}
        </li>
      ))}

      <hr className="sidebar-divider" />
    </ul>
      {/* <!-- End of Sidebar --> */}
    </>
  );
};

export default Sidebar;
