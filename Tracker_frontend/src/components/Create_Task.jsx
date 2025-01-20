import { useRef } from "react";
import { useNavigate } from "react-router";
import "react-datepicker/dist/react-datepicker.css";

function  Create_Task(){

  const task_idRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const assignedonRef = useRef();
  const navigate = useNavigate();
  
  // const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => { 
    e.preventDefault();

    const formData = {
      task_id: task_idRef.current.value,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      address: addressRef.current.value,
      phone: phoneRef.current.value,
      assignedon: assignedonRef.current.value
    };

    console.log("Submitting:", formData);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
      console.log("after stringify",formData);
      fetch("http://localhost:4000/task/task_create", requestOptions)
      .then((response) => response.json())
      .then((result) => {
      console.log("Task created successfully:", result);
    // Navigate to another page on success
    
    navigate("/dashboard");
  })
  .catch((error) => console.error("Error creating profile:", error));

  }
return(
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
                          Create a Task
                        </h4>
                      </div>
                    </div>
                  </div>
                  <form method="Post" onSubmit={handleSubmit}>
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="task_id"
                            placeholder="Enter your full name"
                            ref={task_idRef}
                            required
                          />
                          <label htmlFor="task_id" className="form-label">
                          Task_Id
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="title"
                            className="form-control"
                            id="title"
                            placeholder="Title"
                            ref={titleRef}
                          />
                          <label htmlFor="title" className="form-label">
                           Title
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <textarea
                            type="description"
                            className="form-control"
                            id="description"
                            placeholder="name@example.com"
                            ref={descriptionRef}
                          />
                          <label htmlFor="description" className="form-label">
                            Description
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <textarea
                            type="address"
                            className="form-control"
                            id="address"
                            placeholder="Address"
                            ref={addressRef}
                          />
                          <label htmlFor="addressRef" className="form-label">
                            Address
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <textarea
                            type="phone"
                            className="form-control"
                            id="phone"
                            placeholder="Phone"
                            ref={phoneRef}
                          />
                          <label htmlFor="addressRef" className="form-label">
                            Phone
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">   
                        <input
                            type="date" 
                            className="form-control"  
                            ref={assignedonRef}                
                             />
                        </div>
                      </div>
                      <br/>
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn bsb-btn-xl btn-primary">
                            Create Task
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
    </>
);
};


export default Create_Task;