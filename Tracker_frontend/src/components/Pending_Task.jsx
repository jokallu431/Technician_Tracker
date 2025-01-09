import React from "react";
import "../css/all_tables.css";
const Pending_Task = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="mb-3">
              <h5 className="card-title">
                Pending List{" "}
                <span className="text-muted fw-normal ms-2">(1)</span>
              </h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
              <div>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target=".add-new"
                  className="btn btn-primary"
                >
                  <i className="bx bx-plus me-1"></i> Add New
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="table-responsive">
                <table className="table project-list-table table-nowrap align-middle table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Position</th>
                      <th scope="col">Email</th>
                      <th scope="col">Projects</th>
                      <th scope="col">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt=""
                          className="avatar-sm rounded-circle me-2"
                        />
                        <a href="#" className="text-body">
                          Simon Ryles
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-soft-success mb-0">
                          Full Stack Developer
                        </span>
                      </td>
                      <td>SimonRyles@minible.com</td>
                      <td>125</td>
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                              className="px-2 text-primary"
                            >
                              <i className="bx bx-pencil font-size-18"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                              className="px-2 text-danger"
                            >
                              <i className="bx bx-trash-alt font-size-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 align-items-center pb-4">
          <div className="col-sm-6">
            <div>
              <p className="mb-sm-0">Showing 1 to 10 of 57 entries</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="float-sm-end">
              <ul className="pagination mb-sm-0">
                <li className="page-item disabled">
                  <a href="#" className="page-link">
                    <i className="mdi mdi-chevron-left"></i>
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    <i className="mdi mdi-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pending_Task;
