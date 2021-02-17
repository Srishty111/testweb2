import React,{useState} from 'react'
import {Link} from 'react-router-dom';
function Signup() {
    
const [username,setUsername]=useState("");
const [email,setEmail]=useState('');
const [name,setName]=useState('');
const [mobile,setMobile]=useState('');
const [city,setCity]=useState('')
const [state,setState]=useState('')
const [country,setCountry]=useState('')
const [password,setPassword]=useState('')
//true false
const [usercheck,setU]=useState(false);
const [emailcheck,setE]=useState(false);
const [namecheck,setN]=useState(false);
const [mobilecheck,setM]=useState(false);
const [citycheck,setC]=useState(false);
const [statecheck,setS]=useState(false);
const [countrycheck,setCn]=useState(false);
const [passwordcheck,setP]=useState(false);



const handleSubmit=(e)=>{
    e.preventDefault();
    checkValidations();
}

//checkValidations in form
function checkValidations()
{
    //check email regex
    var emailpattern=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/
    var mobilepattern=/^[5-9][0-9]{9}$/;
    

    if(username.trim()=="" || username.length<3)
    {
        setU(true)

    }
    if(email.trim()=="" )
    {
        setE(true);
    }
    if(!emailpattern.test(email))
    {
        setE(true);
    }
    if(!mobilepattern.test(mobile))
    {
        setM(true);

    }

    if(mobile.trim()=="" || mobile.length<10 || mobile.length>10){
        setM(true)
    }
    if( state.trim()==""  ){
        setS(true)
    }

    if(country.trim()==""){
        setCn(true)
    }
    if(name.trim()==""){
        setN(true)
    }
    if(city.trim()=="")
    {
        setC(true)
    }
    if(password.trim()=="" || password.length<=5)
    {
        setP(true)
    }

}












    return (
        <div className="signIn">
            {/* <div className="Image">
                <img src="https://media.giphy.com/media/3oKIPtjElfqwMOTbH2/giphy.gif" alt="no Image"></img>
            </div>
            
            


        <div className="signupForm">
        <h3>Get Started with us today! 
            <br></br>
            Create Your account</h3>
            <form onSubmit={handleSubmit}>
                <label>username</label>
               <br></br>
                <input type="username" className="username" name="username" required placeholder="username"
                value={username}
                onChange={(e)=>{
                    setU(false)
                    setUsername(e.target.value)}}
                    
                ></input>
            
                
                
                {usercheck?<p style={{color:"red"}}>*wrong format</p>:""}
                <br></br>
                <br></br>
                
                <label>email</label>
                <br></br>
              <input type="email" className="email" name="email" required placeholder="email"
                            value={email}
                           onChange={(e)=>{
                          setEmail(e.target.value)
                          setE(false)
                        }}
                 ></input>

                {emailcheck?<p style={{color:"red"}}>*wrong format</p>:""} 
                <br></br>
                <br></br>
                
                <label>Password</label>
                <br></br>
              <input type="password" className="password" name="password" required placeholder="password"
                            value={password}
                           onChange={(e)=>{
                          setPassword(e.target.value)
                          setP(false)
                        }}
                 ></input>

                {passwordcheck?<p style={{color:"red"}}>*wrong format</p>:""} 
                <br></br>
                <br></br>
                
                <label>Full Name</label>
                <br></br>
                <input type="text" className="number" name="full_name" required placeholder="Name"
                           value={name}             
                           onChange={(e)=>{
                            setName(
                                e.target.value
                                )
                                setN(false)
                            console.log(e.target.value)
                        }}
                    ></input>
                   {namecheck?<p style={{color:"red"}}>*wrong format</p>:""}  
                   <br></br>
                <br></br>
                  
                <label>Mobile No</label>
                <br></br>
                <input type="number" className="number" name="mobile" required placeholder="Mobile No"
                value={mobile}
                           
                onChange={(e)=>{
                    setMobile(e.target.value)
                   setM(false)
                }}
                 ></input>
                   {mobilecheck?<p style={{color:"red"}}>*wrong format</p>:""}
                   <br></br>
                <br></br>
                <hr style={{width:"100px",marginLeft:"-0px"}}></hr>   
                <label>Address:</label>
                <hr style={{width:"100px",marginLeft:"-0px"}}></hr> 
                <br></br>
               

                <div className='Address' >
                    <label>City</label>
                    <br></br>
                    <input type="text" className="city" required placeholder="city"
                     value={city}          
                onChange={(e)=>{
                  setCity(e.target.value)
                  setC(false)
                }}
                ></input>
                {citycheck?<p style={{color:"red"}}>*wrong format</p>:""}    
                <br></br>
                <br></br>
                
                    <label>State</label>
                    <br></br>
                    <input type="text" className="state" required placeholder="state"
                               value={state}
                onChange={(e)=>{
                    setState(
                        e.target.value
                    )
                    setS(false)
                }}
                ></input>
                         {statecheck?<p style={{color:"red"}}>*wrong format</p>:""}
                         <br></br>
                        <br></br>
                        <label>country</label>
                        <br></br>
                    <input type="text" className="country" required placeholder="country"
                     value={country}          
                    onChange={(e)=>{
                        setC(false)
                    setCountry(
                        e.target.value
                    )
                  
                }}
                ></input>
            {countrycheck?<p style={{color:"red"}}>*wrong format</p>:""}
                </div>
                <br></br>
                <button className="signupForm" style={{fontWeight:"900",width:"60%"}} type="submit">Signup</button>
            </form>
            <br></br>
           <Link to ="/login" style={{color:"black"}}>Go To Sign In Page</Link>
        </div>
 */}
                            <div className="container">
            <div className="card" style={{width:"450px",marginTop:"100px",marginBottom:'100px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,64L1440,288L1440,0L0,0Z"></path>
</svg>
            
                <div className="card-body">


                   <header className="myhed text-center">
                       <i className="fa fa-user"></i>
                       <p>Signup</p>
                   </header>
                   <form className="main-form text-center">


                       <div className="form-group my-0">
                           <label className="my-0">
                               <i className="fa fa-user far"></i>
                               <input type="text" className="myinput" placeholder="Username"></input>
                           </label>
                       </div>

                       <div className="form-group my-0">
                           <label className="my-0">
                               <i className="fa fa-envelope far"></i>
                               <input type="text" className="myinput" placeholder="email"></input>
                           </label>
                       </div>
                       <div className="form-group my-0">
                           <label className="my-0">
                               <i className="fa fa-lock far"></i>
                               <input type="text" className="myinput" placeholder="password"></input>
                           </label>
                       </div>

                       <div className="form-group my-0">
                           <label className="my-0">
                               <i className="fa fa-phone far"></i>
                               <input type="text" className="myinput" placeholder="mobileno"></input>
                           </label>
                       </div>

                       <div className="form-group my-0">
                           <label className="my-0">
                               <i className="fa fa-address-card-o far"></i>
                               <input type="text" className="myinput" placeholder="city"></input>
                           </label>
                       </div>
                       <div className="form-group my-0">
                           <label className="my-0">
                               <i className="fa fa-address-card-o far"></i>
                               <input type="text" className="myinput" placeholder="state"></input>
                           </label>
                       </div>
            
                       <div className="form-group my-0">
                           <label className="my-0">
                               <i className="fa fa-address-card-o far"></i>
                               <input type="text" className="myinput" placeholder="Country"></input>
                           </label>
                       </div>
            
            
             

            

                       <div className="form-group">
                           <label className="my-0">
                              
                               <input type="button" className="form-control button" placeholder="Password" value="Signup">

                               </input>
                           </label>
                       </div>
                       <div className="form-group">
                           <label className="my-0">
                              
                               <input type="button" className="form-control button" placeholder="Password" value="Reset">

                               </input>
                           </label>
                       </div>
                   </form>
                   <label className="check_1">
                       <Link to="/Login">Have an account?</Link> 
                           
                       </label>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L1440,288L1440,320L0,320Z"></path></svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L60,26.7C120,21,240,11,360,5.3C480,0,600,0,720,21.3C840,43,960,85,1080,90.7C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
            </div>

        </div>
        






        </div>
    )
}

export default Signup
