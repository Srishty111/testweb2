 import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Tab() {
    return (
        <div className="tab">
            <div  className="left">
                <div className="tab-part">Templates</div>
                <div className="tab-part"><i class="fas fa-running icons"></i> &nbsp;Exercises</div>
                <div className="tab-part"><i class="fas fa-cog icons"></i>&nbsp; Setting</div>
                <div className="tab-part"><i class="fas fa-arrow-from-bottom icons"> &nbsp;</i>Publish</div>
            </div>
            <div className="right">
                <div><Link to="/selectExcerise"></Link></div>
            </div>
        </div>
    )
}

export default Tab
