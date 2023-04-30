import React from 'react'

const Login = () => {
  return (
    <div>
      <>
  
      <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center">
                  <img
                    src="https://www.freepnglogos.com/uploads/medal-png/gold-medal-28.png"
                    style={{ width: 100 }}
                    alt="logo"
                  />
                  <h4 className="mt-1 mb-5 pb-1"></h4>
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
                    />
                    
                  </div>
                  <div className="text-center pt-1 mb-5 pb-1">
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
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-danger">
                      Create new
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4"></h4>
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

   
     