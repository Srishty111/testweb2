import React, { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import './plan.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector,useDispatch} from 'react-redux'
function Plan() {

    const [data, setData] = useState(undefined);
    const myPlanExercise=useSelector(state=>state.planExercise);
    const dispatch = useDispatch()

    useEffect(() => {

        fetch("http://localhost:3000/plans").then(res => res.json()).then((data) => {

            console.log(data);
            setData(data);
        })


    }, [])


    //after deleting data request
    const newData=()=>{

        fetch("http://localhost:3000/plans").then(res => res.json()).then((data) => {

            console.log(data);
            setData(data);
        })
    }

    //delete the data
    const deletePlan= (value)=>{

        fetch(`http://localhost:3000/plans/${value.id}`,{
            method: 'DELETE', 
            headers: { 
                'Content-type': 'application/json'
            } 
        }).then(res=>res.json()).then(data=>{

            newData();
            notify()
        })
    }

     //toast created
     const notify = () => {
        toast.error("Plan Deleted", { position: toast.POSITION.TOP_LEFT, autoClose: 4000 })
    }


    return (
        <>

            {/**Plan */}
            <Navbar></Navbar>
            <div className="plan-screen">
                <div >
                <h5 className="heading">MY PLANS</h5>
                <ToastContainer></ToastContainer>
                </div>
            <div className="plans" >
                {data ? data.map((value, index) => {
                        {console.log(data)}
                    return (
                        <>
                            <div key={uuid()} className="plan">
                                <div className="plan-name">
                                    <h4>{value.planName}</h4>
                                    <div className="icons">
                                    <Link to="/editplan" ><i className="fa fa-edit" style={{color:"blueviolet",fontFamily:'900',fontSize:"20px",cursor:"pointer"}}
                                        onClick={()=>{

                                            localStorage.setItem('exercise-data',JSON.stringify(value.exercisedata))
                                            localStorage.setItem('plan-name',value.planName);
                                            localStorage.setItem('plan-id',value.id)
                                            localStorage.setItem('intervalTime',value.intervalTime);
                                            localStorage.setItem('startDate',value.startDate);        
                                            localStorage.setItem('endDate',value.endDate);        
                                            localStorage.setItem('days',JSON.stringify(value.days)); 
                                         
                                            dispatch({type:"ADD_EXERCISES_EDIT_PLAN",payload:value.exercisedata})

                                            }}
                                       ></i>
                                     </Link>        
                                        &emsp;
                                        &emsp;
                                        <i className="fa fa-minus" style={{color:'red',fontFamily:'900',fontSize:"20px",cursor:"pointer"}}
                                        onClick={(e)=>{

                                            deletePlan(value)  

                                        }}
                                        
                                        ></i>
                                    </div>
                                </div>
                                <div className="plans-data">
                                    {/**plan-exercise data traversed */}
                                    <div className="plans-data-image">
                                        {value ? value.exercisedata.slice(0, 2).map((exercise) => {
                                            console.log(value.exercisedata.exercisedata?value.exercisedata.exercisedata:"")
                                              
                                            return (
                                                <>
                                                    <div className="exercises-data">
                                                        <div className="images-exercise">
                                                            <img src={exercise.imageurl}></img>
                                                        </div>
                                                        <div className="exercise-name">
                                                            {exercise.title}
                                                        </div>

                                                    </div>


                                                </>
                                            )
                                        }):""}
                                        <div className="dots-view-more">
                                            <div className="doots">
                                            </div>
                                            <div className="view-more">
                                               ...<Link  style={{textDecoration:"none"}}  to="/viewmore"
                                               onClick={()=>{
                                                    localStorage.setItem('exercise-data',JSON.stringify(value.exercisedata))
                                                    localStorage.setItem('plan-name',value.planName);
                                                    localStorage.setItem('intervalTime',value.intervalTime);
                                                    localStorage.setItem('startDate',value.startDate);        
                                                    localStorage.setItem('endDate',value.endDate);        
                                                    localStorage.setItem('days',JSON.stringify(value.days));        
                                               }}
                                               >View More
                                               
                                               </Link>
                                            </div>
                                            <div className="" style={{marginTop:"20px",marginLeft:"-150px"}}>
                                            <div className="start-Date">
                                             {value.startDate?  <><i class="fa fa-calendar" aria-hidden="true"></i>&emsp; Start Date &emsp;&emsp;&emsp; {value.startDate}</>:"" }
                                            </div>
                                            <div className="end-Date">
                                            {value.endDate?  <> <i class="fa fa-calendar" aria-hidden="true"></i>&emsp; End Date &emsp;&emsp;&emsp;&nbsp; {value.endDate} </>:"" }
                                                  
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </>
                    )
                 }) : ""}

            </div>
            </div>
        </>
    )
}

export default Plan
