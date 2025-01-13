import { useState } from "react";
function Profile() {
    const [formData, setFormData] = useState({
        name: "",
        // email: "",
        // phone: "",
        // password: "",
        // role: "",
    });
    const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("Submitting:", formData);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    };

    fetch("http://localhost:4000/users/profile", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("Profile created successfully:", result);
        navigate("/success");
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
                        <h4 className="text-center">Let's Create a Profile!</h4>
                      </div>
                    </div>
                  </div>
                  <form method="POST" onSubmit={handleSubmit}>
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label">Name</label>
                        </div>
                      </div>
                      {/* <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label">Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label">Phone</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label">Password</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <select
                            className="form-control"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
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

export default Profile;
