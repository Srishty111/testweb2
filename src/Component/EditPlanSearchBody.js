import React, { useEffect, useState } from 'react'
import './Body.css'
import Card from './Card'
import Pagination from './Pagination'
import Paginate from './Paginate'
import {Link} from 'react-router-dom'
import CardEdit from './CardEdit'
function EditPlanSearchBody() {

    const [data, setData] = useState(undefined);
    const [currentPage, setcurrentPage] = useState(1);
    const [postPerPage, setPostPerpage] = useState(6);
    const [totalPosts, setTotalPosts] = useState();
    const [initialData, setInitialData] = useState(undefined)
    const [status, changeStatus] = useState(false);
    const [pageNumberLimit, setPageNumberLimit] = useState(6);
    const [maxpageNumberLimit, setmaxpageNumberLimit] = useState(6);
    const [minpageNumberLimit, setminPageNumberLimit] = useState(0);
    // const [paginateStatus, setpaginateStatus] = useState(false);
    const [easy, setEasy] = useState(false);
    const [hard, setHard] = useState(false);
    const [medium, setMedium] = useState(false);
    const [expert, setExpert] = useState(false);

    //set array
    const [myarr, setmarrayData] = useState([]);

    //useEffect use generlly when we want to rendered the things after some change
    useEffect(() => {

        fetch("http://localhost:3000/cards").then(res => { return res.json() }).then((data) => {

            setData(data);
            setInitialData(data)
            if (myarr.length == 0) {
                setTotalPosts(data.length);
                setPostPerpage(data.length)
            }
            else {
                setTotalPosts(myarr.length)
                setPostPerpage(data.length)
            }

        })

        changeStatus(false)
        

    }, [status])


    function SearchQuery(e) {

        let inputValue1 = e.target.value.toLowerCase();
        let inputValue2 = e.target.value.toUpperCase()
        if (e.target.value == "") {
            changeStatus(true);

            return;
        }

        fetch(`http://localhost:3000/cards?title=${inputValue1}&${inputValue2}`).then(res => { return res.json() }).then((data) => {
            setData(data)
            // setpaginateStatus(true)
        })

    }

    function InitialStage() {
        setData(initialData)

    }
    //Get current Posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexofFirstPost = indexOfLastPost - postPerPage;

    //decide or filter the data
    const currentPosts = myarr.length != 0 ? myarr.slice(indexofFirstPost, indexOfLastPost) : data ? data.slice(indexofFirstPost, indexOfLastPost) : [];
    console.log(myarr)
    //change page
    const paginate = (number) => {
        setcurrentPage(number)
    }

    const handleNext = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxpageNumberLimit) {
            setmaxpageNumberLimit(maxpageNumberLimit + pageNumberLimit);

            setminPageNumberLimit(minpageNumberLimit + pageNumberLimit)

        }
    }
    const handlePrevious = () => {

        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxpageNumberLimit(maxpageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minpageNumberLimit - pageNumberLimit)

        }


    }

    return (
        <div className="body" style={{marginLeft:"10%", marginTop:"100px"}}>
            {/**body-right-part */}
            <div className="body-right-part">
                <div className="search-bar" >
                    <i className="fa fa-search"></i>
                    <input type="search" onBlur={(e) => {
                        e.target.value = ""
                    }} onChange={SearchQuery} className="search" placeholder="Search Exercises ('\')"></input>
                </div>
                <div className="body-main-part">

                    <CardEdit Data={currentPosts} ></CardEdit>
                </div>
               
                <div className="Body-lower-Part">
                 </div>
            </div>
        </div>
    )
}

export default EditPlanSearchBody
