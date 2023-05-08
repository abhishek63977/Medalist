import React from 'react'

const Login = () => {
  return (
    <div>
      <>
        <section className="h-100 gradient-form bgcolor" >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-1 mx-md-4">
                        <div className="text-center">
                          <img
                            src="https://media.istockphoto.com/id/1316563941/vector/medal-and-ribbon-icons-sport-prize-winner-trophy.jpg?s=612x612&w=0&k=20&c=Ta647-uqjMpDWmDBks1RUSj2WPgQQ5n2El5AEgKOiCA="                           style={{ width: 300 }}
                            alt="logo"
                          />
                          <h4 className="mt-1 mb-3 pb-1">MEDALIST</h4>
                        </div>
                        <form>
                          <p>Please login to your account</p>
                          <label className="form-label" htmlFor="form2Example11">
                            Username
                          </label>
                          <div className=" mb-4">
                            <input
                              type="email"
                              id="form2Example11"
                              className="form-control"
                              placeholder="Phone number or email address"
                            />

                          </div>
                          <label className="form-label" htmlFor="form2Example22">
                            Password
                          </label>
                          <div className=" mb-4">
                            <input
                              type="password"
                              id="form2Example22"
                              className="form-control"
                              placeholder='Password'
                            />

                          </div>
                          <div className="text-center pt-1 mb-3 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="button"
                            >
                              Log in
                            </button>
                            <a className="text-muted" href="#!">
                              Forgot password?
                            </a>
                          </div>
                          <div className="d-flex align-items-center justify-content-center pb-1">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <button type="button" className="btn btn-outline-danger">
                              Create new
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center login-img">
                      <div className="text-white p-5 md-4">
                        <h4 className="mb-4"></h4>
                        {/* <img src="" height={460} width={460} alt="" /> */}
                        <p className="small mb-0">

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





      </>

    </div>
  )
}

export default Login


