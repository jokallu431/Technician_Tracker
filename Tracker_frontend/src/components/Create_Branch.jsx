import { useRef } from "react";
// import { useNavigate } from "react-router";

function Create_Branch(){

  const nameRef = useRef();
  const phoneRef = useRef();
  const branch_idRef = useRef();
  const addressRef = useRef();
  const techniciansRef = useRef();
//   const navigate = useNavigate();

  const handleSubmit = (e) => { 
    e.preventDefault();
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
                        Create Branch Details
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
                            id="branch_id"
                            placeholder="Enter Branch Id"
                            ref={branch_idRef}
                            required
                          />
                          <label htmlFor="branch_id" className="form-label">
                          Branch_id
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="name"
                            className="form-control"
                            id="name"
                            placeholder="Enter Branch Name"
                            ref={nameRef}
                          />
                          <label htmlFor="name" className="form-label">
                          Branch Name
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="address"
                            className="form-control"
                            id="address"
                            placeholder="Address here"
                            ref={addressRef}
                          />
                          <label htmlFor="address" className="form-label">
                           Address
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="phone"
                            className="form-control"
                            id="phone"
                            placeholder="Phone number"
                            ref={phoneRef}
                          />
                          <label htmlFor="password" className="form-label">
                            Phone
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <select
                            className="form-control"
                            name="technicians"
                            ref={techniciansRef}
                            required
                          >
                            <option value="" disabled>
                              Select Technician
                            </option>
                            <option value="admin">Ardra Vijayan</option>
                            <option value="admin">Anu A</option>
                            <option value="technician">Joel Joby</option>
                            <option value="technician">Monai Abraham</option>
                            <option value="technician">Abil Mathew</option>
                          </select>
                          <label className="form-label">Role</label>
                        </div>
                      </div> 
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn bsb-btn-xl btn-primary">
                            Create Branch
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
export default Create_Branch;