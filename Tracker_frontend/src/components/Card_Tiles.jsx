// import React from 'react'
import { useState,useEffect } from "react";
import { Link } from "react-router";
import { EyeIcon } from './Icon';
import {loadTask} from './api';

const Card_Tiles = () => {
  let [taskList, setTaskList] = useState([]);
  useEffect(() => {
    loadTask((data) => {

         let rows = data.map((task) => {
              return generateRow(task)
          });
          setTaskList(rows);
      },() => {
          setTaskList([]);
      });
    
  }, []);
  function generateRow(task) {
    return (
        <tr key = {task.task_id}>
        <td scope="row">{task.task_id}</td>
        <td>
          {task.title}
        </td>
        <td>
          <span className="badge badge-soft-success mb-0">
          {task.description}
          </span>
        </td>
        <td>{task.status}</td>
        <td>
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
            <Link to={"edit"}
              
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Edit"
              className="px-2 text-primary"
            >
            {/* <i className="bx bx-pencil font-size-18"></i>  */}
            </Link>
            </li>
            <li className="list-inline-item">
            <Link to={`view/${task._id}`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="View"
              className="px-2 text-primary"
            >
            <EyeIcon/>
            </Link>
            </li>
          </ul>
        </td>
      </tr>
    );
}
    
  return (
    <>
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>

      {/* <!-- Content Row --> */}
      <div className="row">
        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    UnAssigned Tasks
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    10
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Assigned Tasks
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    11
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-paperclip fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Pending Tasks
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        10
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Pending Requests Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Completed Tasks
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    19
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-check fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fetching data in table*/}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="mb-3">
              <h5 className="card-title">
                Task List{" "}
                <span className="text-muted fw-normal ms-2">({taskList.length})</span>
              </h5>
            </div>
          </div>

        </div>
        
          {
                taskList.length === 0 ?

                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Please wait...</span>
                    </div>
                </div>

            :
            <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="table-responsive">
                <table className="table project-list-table table-nowrap align-middle table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Task Id</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Task Status</th>
                      <th scope="col">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {taskList}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
            }

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

export default Card_Tiles;
