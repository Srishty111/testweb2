import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div className="Navbar">
                {/* leftpart */}
            <div className="leftpart">
                <div className="icon">
                    <i class="fa fa-user"></i>
                </div>
                <div className="dashboard">
                    <h6>Dashboard</h6>
                </div>
                <div className="dashboard">
                    <h6>Creator</h6>
                </div>
                <div className="dashboard">
                    <h6>Client</h6>
                </div>
                <div className="dashboard">
                    <h6>Account</h6>
                </div>
            </div>
                {/* rightpart */}
            <div className="rightpart">
                <i className="fa fa-bell right"></i>
                <i className="fa fa-question-circle right"></i>
            
                <i class="fal fa-arrow-to-left right"></i>
                <button style={{padding:"7px"}} class="right"><i className="fa fa-star">&nbsp;&nbsp;  </i>Get pro </button>

            </div>    
            
        </div>
    )
}

export default Navbar
