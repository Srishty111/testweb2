import React from 'react'
import Navbar from './Navbar'
import Tab from './Tab'
import Pagination from './Pagination'
import Body from './Body'
import Body1 from './Body1'
import {Route} from 'react-router-dom'
function Home() {
    return (
        <div>
        
           <Navbar></Navbar> 
           <Tab></Tab>
           <Body></Body>
           <Route path="/selectExcerise" component={Body1}></Route>

        </div>
    )
}

export default Home
