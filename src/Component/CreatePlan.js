import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import './createplan.css'
import uuid from 'react-uuid'
import DailyMotionPlayer from 'react-player/dailymotion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  


function CreatePlan() {

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
    const [repetationsSet, setrepetationSet] = useState(0);

   
    const [arrdata, setarrdata] = useState([]);
    useEffect(() => {

        setExercise(state.exercises);
        for (var i = 0; i < state.exercises.length; i++) {
            let excerciseobj =
            {
                dataid: uuid(),
                exercisedata: {},
                repetationsSet: 0,
                monvalue: false,
                tuevalue: false,
                wedvalue: false,
                thursvalue: false,
                frivalue: false,
                satvalue: false,
                sunvalue: false,

            };

            arrdata.push(excerciseobj);

        }
        console.log(arrdata)

    }, [])

    //let exercise data

        //when sending post request data should be  sending start date and end date 
   const excerciseData=()=>{
    
 
    console.log("HELLO WORLD")

   }

   //toast created
   const notify = () => {
       toast.info(" plan is created!",{position:toast.POSITION.BOTTOM_LEFT,autoClose:4000})
   }






    return (
        <div>
         
            <Navbar></Navbar>
            {exercises!=undefined && exercises.length>0?<>
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
                                    </div>
                                </div>
                                <div className="right-exercise-part">
                                    <div className="right-exercise-part-upper" style={{ marginBottom: "60px" }}>
                                        <input type="checkbox" onClick={(e) => {

                                            if (e.target.checked) {
                                                arrdata[index].monvalue = true;
                                            }
                                            else {
                                                arrdata[index].monvalue = false;
                                            }


                                        }} ></input>&nbsp; Mon&emsp;&emsp;
                                        <input type="checkbox" onChange={(e) => {

                                            if (e.target.checked) {
                                                arrdata[index].tuevalue = true;
                                            }
                                            else {
                                                arrdata[index].tuevalue = false;
                                            }


                                        }}></input>&nbsp;Tues&emsp;&emsp;
                                        <input type="checkbox" onChange={(e) => {

                                            if (e.target.checked) {
                                                arrdata[index].wedvalue = true;
                                            }
                                            else {
                                                arrdata[index].wedvalue = false;
                                            }


                                        }}></input>&nbsp;Wed&emsp;&emsp;
                                        <input type="checkbox" onChange={(e) => {

                                            if (e.target.checked) {
                                                arrdata[index].thrusvalue = true;

                                            }
                                            else {
                                                arrdata[index].thrusvalue = false;
                                            }


                                        }}></input>&nbsp;Thurs&emsp;&emsp;
                                        <input onChange={(e) => {

                                            if (e.target.checked) {
                                                arrdata[index].frivalue = true;
                                            }
                                            else {
                                                arrdata[index].frivalue = false;
                                            }


                                        }} type="checkbox"></input> &nbsp;Fri&emsp;&emsp;
                                       <input type="checkbox"
                                            onChange={(e) => {

                                                if (e.target.checked) {
                                                    arrdata[index].satvalue = true;
                                                }
                                                else {
                                                    arrdata[index].tuevalue = false;
                                                }


                                            }}
                                        ></input> &nbsp;Sat&emsp;&emsp;
                                       <input type="checkbox"
                                            onChange={(e) => {

                                                if (e.target.checked) {
                                                    arrdata[index].sunvalue = true;
                                                }
                                                else {
                                                    arrdata[index].sunvalue = false;
                                                }


                                            }}
                                        ></input>&nbsp; Sun&emsp;&emsp;
                                    </div>
                                    <div clasName="right-exercise-part-upper">
                                        <h5>Enter Repetations Set</h5> <input type="text" onChange={(e) => {

                                            arrdata[index].repetationsSet = e.target.value;
                                            console.log(arrdata[index], arrdata)
                                        }} required></input>
                                        <i className="fa fa-plus" style={{ fontSize: "30px", color: 'green', marginLeft: '100px', cursor: 'pointer' }}
                                            onClick={(e) => {
                                                //add repetation set and excercise data
                                                arrdata[index].repetationsSet = e.target.value;
                                                arrdata[index].exercisedata=exercise;
                                                 alert("data added");   
                                                console.log(arrdata)

                                            }}

                                        ></i>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }) : ""}
            <div className="creating-plan-button">
            <button  onClick={() =>{
                
                 excerciseData()
                 notify()
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
            <h1 style={{textAlign:'center',marginTop:"100px",textTransform:"capitalize"}}>

                No exercises seleted
            </h1>

            </>
            
            }


        </div>
    )
}

export default CreatePlan
