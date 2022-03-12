import React from 'react'

const Navbar = () => {
  return (
        <div style={{zIndex:1000, backgroundColor:'transparent'}}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse d-flex justify-content-end align-items-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="/"><strong>Home</strong></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="/login"><strong>Login/ SignUp</strong></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
  )
}

export default Navbar;