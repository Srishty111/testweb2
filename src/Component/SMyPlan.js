import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import PlanCard from './SPlanCard'
import './SNavbar.css'

function MyPlan() {

    const [data, setData] = useState(undefined);
    const [status, changeStatus] = useState(false);
    var rdone = 100;
    var totalr = 500;
    var per = (rdone / totalr) * 100;
    var per = per.toFixed(2);;
    useEffect(() => {
        fetch("http://localhost:3000/cards1").then(res => { return res.json() }).then((data) => { setData(data); })
        changeStatus(false)
    }, [status])


    return (
        <div>
            <Navbar /> <br />
       <h4 className="text-center"> Today Progress</h4><br />
            <div class="progress" style={{width:"50%",marginBottom:"40px",marginLeft:"20%",marginTop:"50px"}}>
                <div class="progress-bar" style={{ width: per + "%" }} role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                <b >{per}% Complete</b>
            </div>  <br />



            <div class="row" style={{width:"90%",display:"flex",flexWrap:"wrap",marginLeft:"50px"}}>
                {data ? data.map(datai => {
                    return (<div class="col-sm">
                        <PlanCard a={datai} />
                         <div style={{fontWeight:"500",marginLeft:"30px"}}>   
                        {datai.repperset}
                          &emsp;  reps&nbsp;
                        {datai.noofsets}&emsp; Sets
                        </div>
                        </div>)
                        
                }) : null}
            </div>
            <br />
            <br />

        </div>
    )
}

export default MyPlan
