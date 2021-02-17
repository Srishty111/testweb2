import React, { useState, useEffect } from 'react'
import './Card.css'
import "react-responsive-modal/styles.css";
import uuid from 'react-uuid'
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CardEdit(data) {

    const [open, setOpen] = useState(false);
    const [arr, setArr] = useState([]);
    const [status, setStatus] = useState(false);
    const [color, setColor] = useState("gray")
    let repetationsSet=undefined;
    const dispatch = useDispatch();
    useEffect(() => {

        setColor("gray")
        console.log("my color")
    }, [status, color])

    const notify = (value) => {
        toast.info(`${value}!`, { position: toast.POSITION.TOP_LEFT, autoClose: 4000 })
    }

    return (

        <>
      
            {data.Data ? data.Data.map((value, index) => {
                return <>

                    <div key={uuid()} className="cards">

                        <div className="image">
                            <img src={value.imageurl}></img>
                        </div>
                        <div className="card-bodys">
                        <h6>{value.level} </h6>
                            <h6>{value.title}</h6>

                        </div>
                            <div style={{display:'flex' ,marginLeft:"-10px",justifyContent:"space-evenly",marginBottom:"10px"}}>
                                <h6>Enter RepetationSet Time</h6>
                                <input type="number" style={{width:"50px"}} onChange={(e)=>{
                                    repetationsSet=e.target.value
                               
                                    }}></input>
                                <i className="fa fa-plus" onClick={()=>{

                                    dispatch({type:"ADD_EXERCISE_PLAN",payload:{...value,
                                        repetationsSet
                                     }})
                                     notify("Exercise Add")
                                }}></i>
                            </div>
                        </div>
                    <div>

                    </div>   
                </>


            }) : ""}

           
        </>
    )
}

export default CardEdit


