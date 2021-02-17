import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import './createplan1.css'
import uuid from 'react-uuid'
import DailyMotionPlayer from 'react-player/dailymotion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreatePlan1() {

    var today = new Date();
    var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var tomday = tomorrow.getDate();
    var tommonth = tomorrow.getMonth() + 1;
    var tomyear = tomorrow.getFullYear();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const state = useSelector((state) => state);
    console.log(state.exercises.length)
    const [exercises, setExercise] = useState(undefined);
    const [startDate, setstartDate] = useState(`${tomyear}-0${tommonth}-${tomday}`);
    const [endDate, setEndDate] = useState(undefined);
    const [data, setData] = useState([]);

    // taking data from cards
    const [monvalue, setmonvalue] = useState(false);
    const [tuevalue, settuevalue] = useState(false);
    const [wedvalue, setwedvalue] = useState(false);
    const [thursvalue, setthrusvalue] = useState(false);
    const [frivalue, setfrivalue] = useState(false);
    const [satvalue, setsatvalue] = useState(false);
    const [sunvalue, setsunvalue] = useState(false);
    var [repetationsSet, setrepetationSet] = useState();
    const [intervaltime,setintervaltime]=useState(4);
    const [planName,setplanName]=useState("")
    const [arrdata, setarrdata] = useState([]);
    useEffect(() => {

        setExercise(state.exercises);
        for (var i = 0; i < state.exercises.length; i++) {
            let excerciseobj =
            {
                dataid: uuid(),
                exercisedata: {},
               
                
            };

            arrdata.push(excerciseobj);

        }
        console.log(arrdata)

    }, [])

    //let exercise data

    const excerciseData = () => {
        //when sending post request data should be  sending start date and end date 

        console.log(arrdata,monvalue,tuevalue,wedvalue,thursvalue,frivalue,satvalue,sunvalue,intervaltime)
        let newdataarray=[]
        console.log(arrdata)
        for(var i=0;i<arrdata.length;i++)
        {
            newdataarray.push(arrdata[i].exercisedata);
       
        }
        let obj={
            id: uuid(),
            planName:planName,
            intervalTime: intervaltime,
            exercisedata:newdataarray,
            days:{
                monvalue,tuevalue,wedvalue,thursvalue,frivalue,satvalue,sunvalue
            },
            startDate,
            endDate
            }
        

        //send data to backend
        fetch('http://localhost:3000/plans', {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json',
            },
        body: JSON.stringify(obj),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);  
            window.location="/plan"
            })
    }

    //toast created
    const notify = (value) => {
        toast.info(`${value}!`, { position: toast.POSITION.TOP_LEFT, autoClose: 4000 })
    }
return (
        <div>
            {arrdata}
            <Navbar></Navbar>
            {exercises != undefined && exercises.length > 0 ? <>
                <div className="create-plan-heading">
                    <h5 >  Create  Workout Plan
              </h5>

                </div>
                <div className="choosing-dates">
                    <div className="start-date">
                        <h6>Choosing Exercise Start Date</h6>
                        <input type="date" onChange={(e) => {

                            setstartDate(e.target.value);

                        }} value={startDate} defaultValue={`${tomyear}-0${tommonth}-${tomday}`}></input>
                    </div>
                    <div className="end-date">
                        <h6>Choosing Exercise End Date</h6>
                        <input type="date" onChange={(e) => {

                            setEndDate(e.target.value);
                        }} value={endDate}   ></input>
                    </div>
                </div>
                <div className="createplan">

                    {exercises ? exercises.map((exercise, index) => {

                        return (
                            <>
                                <div key={`${uuid()}`} className="excercise">



                                    <div className="left-exercise-part">
                                        <div className="excercise-image">
                                            <img src={exercise.imageurl} className="excercise-image"></img>
                                        </div>
                                        <div className="left-exercise-lower-part">
                                            <p>
                                                <b>Exercise Name</b> &emsp;
                                            {exercise.title}<br></br>
                                                <b> Exercise level</b>&emsp;&emsp;
                                        {exercise.level}</p>

                                            <h5>Enter Repetations Set</h5>
                                            <br></br>
                                            <div style={{ display: "flex" }}>
                                                <input style={{ width: '100px' }} type="text" onChange={(e) => {

                                                    arrdata[index].repetationsSet = e.target.value;
                                                    repetationsSet=e.target.value
                                                    console.log(arrdata[index], arrdata)
                                                }} required placeholder="enter  set"></input>
                                                <i className="fa fa-plus" style={{ fontSize: "30px", color: 'blue', marginLeft: '100px', cursor: 'pointer' }}
                                                    onClick={(e) => {
                                                        //add repetation set and excercise data
                                                        
                                                        arrdata[index].exercisedata = exercise;
                                                        arrdata[index].exercisedata={...arrdata[index].exercisedata,
                                                        repetationsSet
                                                        }
                                                        notify("data added")
                                                      

                                                    }}

                                                ></i>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                    }) : ""}
                </div>

               <div>

                        <div className="selectDays">
                <b>Select Days</b> &emsp;&emsp;
            <input type="checkbox" onChange={(e) => {

                    if (e.target.checked) {
                        setmonvalue(true)
                    }
                    else {
                        setmonvalue(false)
                    }
                }} ></input>&nbsp; Mon &emsp;
            <input type="checkbox" onChange={(e) => {

                    if (e.target.checked) {
                        settuevalue(true);
                    }
                    else {
                        settuevalue(false);
                    }
                }}  ></input>&nbsp;Tue &emsp;
            <input type="checkbox" onChange={(e) => {

                    if (e.target.checked) {
                        setwedvalue(true);
                    }
                    else {
                        setwedvalue(false);
                    }
                }} ></input>&nbsp;Wed &emsp;
            <input type="checkbox" onChange={(e) => {

                    if (e.target.checked) {
                        setthrusvalue(true);
                    }
                    else {
                        setthrusvalue(false);
                    }
                }} ></input>&nbsp;Thrus &emsp;
            <input type="checkbox" onChange={(e) => {

                    if (e.target.checked) {
                        setfrivalue(true);
                    }
                    else {
                        setfrivalue(false);
                    }
                }} ></input>&nbsp;Fri &emsp;
            <input type="checkbox" onChange={(e) => {

                    if (e.target.checked) {
                        setsatvalue(true);
                    }
                    else {
                        setsatvalue(false);
                    }
                }} ></input>&nbsp;Sat &emsp;
            <input type="checkbox" onChange={(e) => {

                    if (e.target.checked) {
                        setsunvalue(true);
                    }
                    else {
                        setsunvalue(false);
                    }
                }}

                ></input>&nbsp;Sun &emsp;
            </div>
            <div className="intervalTime">
                <h5>Enter Interval Time</h5>&emsp;&emsp;&emsp;&emsp;&emsp;
               
                <input type="number" value={intervaltime} onChange={(e)=>{

                    setintervaltime(e.target.value)
                    console.log(e.target.value)
                }}></input>

            </div>
            <div className="planName intervalTime">
            <h5>Enter Plan Name</h5>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
                <input type="text" placeholder="enter plan name" onChange={(e)=>{
                    setplanName(e.target.value)
                }}></input>


            </div>
            <div className="creating-plan-button">
                <button onClick={() => {

                    excerciseData()
                    notify("plan created")
                }
                }>
                    Create Plan
                 </button>
                <ToastContainer></ToastContainer>

            </div>
       
                </div>     



            </>
                :

                <>
                    <h1 style={{ textAlign: 'center', marginTop: "100px", textTransform: "capitalize" }}>

                        No exercises seleted
            </h1>

                </>

            }
    
                
        </div>
    )
}

export default CreatePlan1
