import { useRef,useState,useEffect } from "react";
import { useNavigate,useParams} from "react-router";
import { loadUsersDetails } from "./api";


function Views() {

  let {_id } = useParams();
  let [user, setUser] = useState(null);
  console.log(user);
    
        useEffect(() => {
            loadUsersDetails(_id, (data) => {
              
                setUser(data[0]);
            },() => {
                setUser(null);
            });
        }, [_id]);

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const branchesRef = useRef();
  const roleRef = useRef();
  const navigate = useNavigate();
console.log("inside user profile");

  const handleSubmit = (e) => { 
    e.preventDefault();

    // Collect form data using useRef
    const formData = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      branch: branchesRef.current.value,
      role: roleRef.current.value,
    };

    console.log("Submitting:", formData);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
      console.log("after stringify",formData);
      
    fetch("http://localhost:4000/users/profile/"+`${user._id}`, requestOptions)
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
       {/* <section className="bg-light p-3 p-md-4 p-xl-5">
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
                          Lets Create a Profile!
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
                            id="name"
                            placeholder="Enter your full name"
                            ref={nameRef}
                            required
                          />
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="phone"
                            className="form-control"
                            id="phone"
                            placeholder="Enter your phone number"
                            ref={phoneRef}
                          />
                          <label htmlFor="phone" className="form-label">
                            Phone No.
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            ref={emailRef}
                          />
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            ref={passwordRef}
                          />
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <select
                            className="form-control"
                            name="role"
                            ref={branchesRef}
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
                      <div className="col-12">
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
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn bsb-btn-xl btn-primary">
                            Create Profile
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
      </section>  */}

<section className="bg-light p-3 p-md-4 p-xl-5">
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
                      Name {user.name}
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-floating mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone No.
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-floating mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      ref={passwordRef}
                        value={user.password}
                    />
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-floating mb-3">
                    <select
                      className="form-control"
                      name="branch"
                      ref={branchesRef}
                      value={user.branch}
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
</section>

    </>
  );
}

export default Views;
