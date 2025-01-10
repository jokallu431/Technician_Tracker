import { Link } from "react-router";
function User_profile() {
  
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
                  <form action="#!">
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="name"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Jhon Deo"
                            required
                          />
                          <label for="name" className="form-label">
                            Name
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="phone"
                            className="form-control"
                            name="phone"
                            id="phone"
                            placeholder="988648184"
                            required
                          />
                          <label for="phone" className="form-label">
                            Phone No.
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            required
                          />
                          <label for="email" className="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            value=""
                            placeholder="Password"
                            required
                          />
                          <label for="password" className="form-label">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            name="confirm_password"
                            id="confirm_password"
                            value=""
                            placeholder="confirm_Password"
                            required
                          />
                          <label for="confirm_password" className="form-label">
                            Confirm Password
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <select
                            className="form-control"
                            name="role"
                            id="role"
                            required
                          >
                            <option value="" disabled selected>
                              Select Option
                            </option>
                            <option value="admin">Admin</option>
                            <option value="technician">Technician</option>
                          </select>
                          <label for="passwordOptions" className="form-label">
                            Role
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <Link
                            to="/login"
                            className="btn bsb-btn-xl btn-primary"
                            type="submit"
                          >
                            Create Profile
                          </Link>
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
export default User_profile;
