  import React from 'react'
  
  const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* Container wrapper */}
  <div className="container-fluid">
    <img src="./downloads/winner.png" alt="" />
    {/* Toggle button */}
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarLeftAlignExample"
      aria-controls="navbarLeftAlignExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" />
    </button>
    {/* Collapsible wrapper */}
    <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
      {/* Left links */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Signup
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Login
          </a>
        </li>
       
     
      
      </ul>
      {/* Left links */}
    </div>
    {/* Collapsible wrapper */}
  </div>
  {/* Container wrapper */}
</nav>

      </div>
    )
  }
  
  export default Navbar
  