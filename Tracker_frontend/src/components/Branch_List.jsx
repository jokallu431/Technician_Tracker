
import { useRef } from "react";
// import { useNavigate } from "react-router";

function Branch_list(){

      const branchRef = useRef();
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
                            Technician List
                            </h4>
                          </div>
                        </div>
                      </div>
                      <form method="Post" onSubmit={handleSubmit}>
                        <div className="row gy-3 overflow-hidden">
                        <div className="col-12">
                            <div className="form-floating mb-3">
                              <select
                                className="form-control"
                                name="branch"
                                ref={branchRef}
                                required
                              >
                                <option value="" disabled>
                                  Select Branch
                                </option>
                                <option value="branch">Kochi</option>
                                <option value="branch">Edappally</option>
                                <option value="branch">Vytilla</option>
                              </select>
                              <label className="form-label">Branch</label>
                            </div>
                          </div> 
                        
                          <div className="col-12">
                            <div className="d-grid">
                              <button className="btn bsb-btn-xl btn-primary">
                               Show Details
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
    export default Branch_list;    