import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import './Viewmore.css'
import uuid from 'react-uuid'

function ViewMore() {

    const [exercises, setExercises] = useState(undefined);
    const [planeName, setplanName] = useState(undefined);
    const [intervalTime, setintervalTime] = useState(undefined);
    const [days,setDays]=useState(undefined)
    useEffect(() => {

        setExercises(JSON.parse(localStorage.getItem('exercise-data')));
        setplanName(localStorage.getItem('plan-name'));
        setintervalTime(localStorage.getItem("intervalTime"));
        setDays(JSON.parse(localStorage.getItem('days')));
       
    }, [])

    return (
        <div>
           
            <Navbar></Navbar>
            {/**View-more exercise */}
             <div className="planeName text-center">
                <h4>{planeName} Schedule</h4>

            </div>
            <div className="dates">
                Start Date    <h6>{localStorage.getItem('startDate')}</h6>
                End Date <h6>{localStorage.getItem('endDate')}</h6>

            </div>

            <div className="weekdays">
                <div>
                    <h5>Week Days</h5>
                </div>
                <div className="days">
                    {days?days.monvalue? <>MONDAY &emsp;  &emsp;</> :"": ""}
                    {days?days.tuevalue? <>TUESDAY&emsp;  &emsp;</> :"": ""}
                    {days?days.wedvalue ? <>WEDNESDAY &emsp;  &emsp;</> :"": ""}
                    {days?days.thrusvalue ? <>THRUSDAY &emsp;  &emsp;</> :"": ""}
                    {days?days.frivalue ? <>FRIDAY &emsp;  &emsp;</> :"": ""}
                    {days?days.satvalue ? <>SATURDAY &emsp;  &emsp;</> : "":""}
                    {days ?days.sunvalue? <>SUNDAY &emsp;  &emsp;</> :"": ""}
                    {console.log(days)}
                </div>
            </div>
            <div className="render-my-plan">
                {exercises ? exercises.map((exercise) => {
                    return (
                        <div className="render-video">
                            <div key={uuid()} className="exercise-render">
                                <div className="exercise-render-images">
                                    <img src={exercise.imageurl}></img>
                                </div>
                                <div className="content-render">
                                    <div className="repetaion-set">
                                        <h6> repetation-set &emsp; &emsp; &emsp; &nbsp; <span style={{ color: 'blue' }}> {exercise['repetationsSet']}</span></h6>
                                    </div>
                                    <div className="levels">
                                        <h6>  Exercise-level &emsp; &emsp; &emsp;&nbsp;&nbsp;&nbsp; <span style={{ color: "blue" }}> {exercise.level}</span> </h6>
                                    </div>
                                    <div className="title">
                                        <h6>  Exercise-Name &emsp; &emsp; &emsp; <span style={{ color: "blue" }}> {exercise.title} </span></h6>
                                        <h6>  Interval Time &emsp; &emsp; &emsp;  &emsp; <span style={{ color: "blue" }}> {intervalTime} </span></h6>
                                    </div>
                                </div>  {console.log(exercises)}
                            </div>
                            <div className="video">
                                <video src={exercise.videourl} controls></video>
                            </div>
                        </div>

                    )

                }) : "LOADED EXERCISES"}

            </div> 

        </div>
    )
}

export default ViewMore
