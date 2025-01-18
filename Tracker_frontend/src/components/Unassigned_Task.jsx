import React from 'react'
import "../css/all_tables.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { EyeIcon } from './Icon';
import {loadTask} from './api';

const Unassigned_Task = () => {
  let [taskList, setTaskList] = useState([]);
    
    useEffect(() => {
        loadTask((data) => {
          
          console.log("task after",data);
            let rows = data.map((task) => {
                console.log("task in loadTask",task.task_id);
                
                return generateRow(task);
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
                    <Link to={"./add"}
                      
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Edit"
                      className="px-2 text-primary"
                    >
                    <i className="bx bx-pencil font-size-18"></i> 
                    </Link>
                    </li>
                    <li className="list-inline-item">
                    <Link to={'delete'}
                      
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
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
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="mb-3">
              <h5 className="card-title">
                Unassigned List{" "}
                <span className="text-muted fw-normal ms-2">(1)</span>
              </h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
              <div>
                <Link to={'./add'}
                  data-bs-toggle="modal"
                  data-bs-target=".add-new"
                  className="btn btn-primary"
                >
                  <i className="bx bx-plus me-1"></i> Add New
                </Link>
              </div>
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


export default Unassigned_Task;