import { useRef } from "react";
import { useNavigate } from "react-router";

function UserProfile() {
  const nameRef = useRef();
  // const phoneRef = useRef();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const roleRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();

    // Collect form data using useRef
    const formData = {
      name: nameRef.current.value,
      // phone: phoneRef.current.value,
      // email: phoneRef.current.value,
      // password: passwordRef.current.value,
      // role: roleRef.current.value,
    };

    console.log("Submitting:", formData);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData[0]),
    };
      console.log("after stringify",formData);
      
    fetch("http://localhost:4000/users/profile", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("Response",response);
        
        console.log("Profile created successfully:", result);

        // Navigate to another page on success
        navigate("/profile_success");
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
                          Let's Create a Profile!
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
                            ref={nameRef}
                            required
                          />
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                        </div>
                      </div>
                      {/* Uncomment and refactor additional inputs as needed */}
                      {/* <div className="col-12">
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
                      </div> */}
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

export default UserProfile;
