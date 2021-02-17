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
            <Body1></Body1>

        </div>
    )
}

export default Home
