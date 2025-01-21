import { useRef,useState,useEffect } from "react";
import { useNavigate,useParams} from "react-router";
import { loadUsersDetails,loadTaskDetails } from "./api";


function Views() {
  let role = localStorage.getItem("role");
  let {_id } = useParams();
  let [task, setTask] = useState(null);
  console.log(task);
    
        useEffect(() => {
          loadTaskDetails(_id, (data) => {
              
                setTask(data[0]);
            },() => {
                setTask(null);
            });
        }, [_id]);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const task_idRef = useRef();
  const statusRef = useRef();
  const assigned_onRef = useRef();
  const addressRef = useRef();
//   const navigate = useNavigate();
// console.log("inside user profile");

  const handleSubmit = (e) => { 
    e.preventDefault();

    // Collect form data using useRef
    const formData = {
      task_id: task_idRef.current.value,
      title: titleRef.current.value,
      assigned_on: assigned_onRef.current.value,
      status: statusRef.current.value,
      description: descriptionRef.current.value,
      address: addressRef.current.value,
    };

    console.log("Submitting:", formData);

    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
      console.log("after stringify",formData);
      
    fetch(`http://localhost:4000/task/task_update?_id=${_id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("Profile created successfully:", result);
        // Navigate to another page on success
        
        navigate("/dashboard");
      })
      .catch((error) => console.error("Error creating profile:", error));
  };

  return (
    <>
        <section className="bg-light p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
              <div className="card border border-light-subtle rounded-4">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h4 className="text-center">
                          {" "}
                          Lets View a Task!
                        </h4>
                      </div>
                    </div>
                  </div>
                  <form method="Post" onSubmit={handleSubmit}>
                    <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="task_id"
                            placeholder="Enter your full Task Id"
                            ref={task_idRef}
                            value={task?.task_id}
                            required
                          />
                          <label htmlFor="task_id" className="form-label">
                            Task ID
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Enter your full Title"
                            ref={titleRef}
                            defaultValue={task?.title}
                            required
                          />
                          <label htmlFor="title" className="form-label">
                            Title
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="Description"
                            placeholder="Enter your Task Description "
                            ref={descriptionRef}
                            defaultValue={task?.description}
                          />
                          <label htmlFor="Description" className="form-label">
                            Description
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="assigned_on"
                            ref={assigned_onRef}
                            defaultValue={task?.assigned_on}
                            
                          />
                          <label htmlFor="assigned_on" className="form-label">
                            Assigned On
                          </label>
                        </div>
                      </div>
                      {role==="Admin"?<div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="status"
                            placeholder="status"
                            ref={statusRef}
                            defaultValue={task?.status}
                          />
                          <label htmlFor="status" className="form-label">
                            Status
                          </label>
                        </div>
                      </div>:
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="status"
                            placeholder="status"
                            ref={statusRef}
                            value={task?.status}
                          />
                          <label htmlFor="status" className="form-label">
                            Status
                          </label>
                        </div>
                      </div>
                      }
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <select
                            className="form-control"
                            name="address"
                            ref={addressRef}
                            defaultValue={task?.address}
                            required
                          >
                            <option value="" disabled>
                              Select Address
                            </option>
                            <option value="Kochi">Kochi</option>
                            <option value="Edapally">Edapally</option>
                          </select>
                          <label className="form-label">Branches</label>
                        </div>
                      </div> 
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn bsb-btn-xl btn-primary">
                            Edit Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

{/* <section className="bg-light p-3 p-md-4 p-xl-5">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
        <div className="card border border-light-subtle rounded-4">
          <div className="card-body p-3 p-md-4 p-xl-5">
            <div className="row">
              <div className="col-12">
                <div className="mb-5">
                  <h4 className="text-center">
                    Lets Create a Profile!
                  </h4>
                </div>
              </div>
            </div>
            <form method="Post" onSubmit={handleSubmit}>
              <div className="row gy-2">
                <div className="col-12 col-md-6">
                  <div className="form-floating mb-3">
                    <label htmlFor="name" className="form-label">
                      Title : {task?.title}
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-floating mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone No.{task.title}
{task.description}
{task.address}
{task.status}
{task.assigned_on}
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-floating mb-3">
                    <label htmlFor="assigned_on" className="form-label">
                      assigned_on
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="status"
                      className="form-control"
                      id="status"
                      placeholder="status"
                      ref={statusRef}
                        value={task?.description}
                    />
                    <label htmlFor="status" className="form-label">
                      status
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-floating mb-3">
                    <select
                      className="form-control"
                      name="branch"
                      ref={branchesRef}
                      value={task?.branch}
                      required
                    >
                      <option value="" disabled>
                        Select Branches
                      </option>
                      <option value="Kochi">Kochi</option>
                      <option value="Edapally">Edapally</option>
                    </select>
                    <label className="form-label">Branches</label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-floating mb-3">
                    <select
                      className="form-control"
                      name="role"
                      ref={roleRef}
                      required
                    >
                      <option value="" disabled>
                        Select Role
                      </option>
                      <option value="Admin">Admin</option>
                      <option value="Technician">Technician</option>
                    </select>
                    <label className="form-label">Role</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

{/* <section className="bg-light p-3 p-md-4 p-xl-5">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
        <div className="card border border-light-subtle rounded-4">
          <div className="card-body p-3 p-md-4 p-xl-5">
            <div className="row">
              <div className="col-12">
                <div className="mb-5">
                  <h4 className="text-center">Task Details</h4>
                </div>
              </div>
            </div>
            <div className="row gy-3">
              <div className="col-12">
                <p><strong>Task ID:</strong> {task.task_id}</p>
              </div>
              <div className="col-12">
                <p><strong>Title:</strong> {task.title}</p>
              </div>
              <div className="col-12">
                <p><strong>Description:</strong> {task.description}</p>
              </div>
              <div className="col-12">
                <p><strong>Address:</strong> {task.address}</p>
              </div>
              <div className="col-12">
                <p><strong>Status:</strong> {task.status}</p>
              </div>
              <div className="col-12">
                <p><strong>Assigned On:</strong>{task.assigned_on}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

    </>
  );
}

export default Views;
