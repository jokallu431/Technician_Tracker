import { useRef,useState,useEffect } from "react";
import { useNavigate,useParams} from "react-router";
import { loadUsersDetails } from "./api";

function Profile() {
  const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const roleRef = useRef();
    const navigate = useNavigate();

  let [usersList, setUsersList] = useState([]);
    
        useEffect(() => {
          id = localStorage.getItem("id");
          loadUsersDetails((data) => {
                let rows = data.map((user) => {
                    console.log(user);
                    return generateRow(user);
                });
                setUsersList(rows);
            },() => {
                setUsersList([]);
            });
        }, []);
      
        const handleSubmit = (e) => { 
          e.preventDefault();
      
          // Collect form data using useRef
          const formData = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      role: roleRef.current.value,
    };
      
          console.log("Submitting:", formData);
      
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          };
            console.log("after stringify",formData);
            
          fetch("http://localhost:4000/users/user_update", requestOptions)
            .then((response) => response.json())
            .then((result) => {
              console.log("Profile updated successfully:", result);
              // Navigate to another page on success
              
              navigate("/login");
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
                          Let's view a Profile!
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
                            id="name"
                            placeholder="Enter your full name"
                            defaultValue={usersList.name}
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
                            defaultValue={usersList.phone}
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
                            defaultValue={usersList.email}
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
                            defaultValue={usersList.password}
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
                            ref={roleRef}
                            value={usersList.role}
                            required
                          >
                            <option value="" disabled>
                              Select Role
                            </option>
                            <option value="admin">Admin</option>
                            <option value="technician">Technician</option>
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
      </section>
    </>
  );
}

export default Profile;
