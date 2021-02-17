import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Body from './Body'
import './editplan.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import EditPlanSearchBody from './EditPlanSearchBody'
function EditPlan() {


    let exercises = useSelector(state => state.planExercises);
    const [planeName, setplanName] = useState(undefined);
    const [intervalTime, setintervalTime] = useState(undefined);
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch({type:"ADD_EXERCISES_EDIT_PLAN",payload: JSON.parse(localStorage.getItem('exercise-data'))})
        setplanName(localStorage.getItem('plan-name'));
        setintervalTime(localStorage.getItem("intervalTime"));

    }, [])

    //change plan using reducer
    const changePlan = () => {
        //to update request to backend using api 
        localStorage.setItem('exercise-data', exercises)

        
        let Data = {
            id: localStorage.getItem('plan-id'),
            planName: localStorage.getItem("plan-name"),
            intervalTime: localStorage.getItem("intervalTime"),
            exercisedata: exercises,
            startDate: localStorage.getItem("startDate"),
            endDate: localStorage.getItem("endDate"),
            days:localStorage.getItem("days"),
        }

        fetch(`http://localhost:3000/plans/${Data.id}`, {
            method: 'put',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(Data)
        }).then(res => res.json()).then(data => {

            notify()
        })

    }

    //toast created
    const notify = () => {
        toast.success("Plan Update", { position: toast.POSITION.TOP_LEFT, autoClose: 4000 })
    }


    return (
        <div style={{overflowX:"hidden"}}>
            <Navbar></Navbar>
            <ToastContainer></ToastContainer>
            <div className="edit">
                <button type="button" class="btn  btn-outline-warning" onClick={changePlan} >Update</button>
                <div className="edit-plan ">
                    {exercises ? exercises.map((exercise) => {

                        return (
                            <>
                                <div className="edit-card">
                                    <div className="edit-card-body">
                                        <div className="edit-card-image">
                                            <img src={exercise.imageurl}></img>
                                            <div className="edit-card-remove">
                                                <i className="fa fa-minus" style={{ cursor: "pointer", color: "red" }}
                                                    onClick={() => {

                                                        dispatch({ type: "delete_from_plan", payload: exercise })


                                                    }}
                                                ></i>
                                            </div>
                                        </div>
                                        <div className="edit-card-content">
                                            <h6> Exericse-name &emsp; &emsp;   <span style={{ color: 'blue' }}> {exercise['title']} </span></h6>
                                            <h6> Exercise-level &emsp; &emsp;&nbsp; &nbsp;<span style={{ color: 'blue' }}> {exercise['level']} </span></h6>
                                        </div>
                                    </div>
                                    <div className="edit-card-footer">
                                        <h6> Interval Time &emsp; &emsp;&nbsp; &nbsp;&nbsp;<span style={{ color: 'blue' }}> {intervalTime} </span></h6>
                                        <h6> Repetaion-set  &emsp; &emsp;&nbsp; &nbsp;<span style={{ color: 'blue' }}> {exercise['repetation-set']?exercise['repetation-set']:exercise.repetationsSet} </span></h6>
                                    </div>
                                </div>
                            </>
                        )

                    }) : ""}


                </div>
            </div>
            <EditPlanSearchBody></EditPlanSearchBody>
        </div>
    )
}

export default EditPlan
