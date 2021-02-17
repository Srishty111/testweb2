import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './login.css'
function Login() {
    
const [username,setUsername]=useState("");

const [password,setPassword]=useState('')
//true false
const [usercheck,setU]=useState(false);
const [passwordcheck,setP]=useState(false);



const handleSubmit=(e)=>{
    e.preventDefault();
    checkValidations();
}

//checkValidations in form
function checkValidations()
{
    //check email regex

    

    if(username.trim()=="" || username.length<3)
    {
        setU(true)

    }
    if(password.trim()=="" || password.length<=5)
    {
        setP(true)
    }

}


return (
        <div className="signIn" style={{height:"500px"}}>
            {/* <div className="Image" >
                <img style={{height:"110%"}} src="https://media.giphy.com/media/3oKIPtjElfqwMOTbH2/giphy.gif" alt="no Image"></img>
            </div>
            
            


        <div className="signinForm" style={{marginRight:"100px",marginTop:"100px"}}>
        <h3>Get Started with us today! 
         </h3>
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
    
                <button className="signupForm" style={{fontWeight:"900",width:"60%"}} type="submit">Signup</button>
            </form>
            <br></br>
          
           <Link to ="/signup" style={{color:"black"}}>Need an Account?</Link>
        </div>

                          <div>
                          */}
                          {/* <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}

        <div className="container">
            

            <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,64L1440,288L1440,0L0,0Z"></path>
</svg>
                <div className="card-body">
                   <div className="circle"></div> 
                   <header className="myhed text-center">
                       <i className="fa fa-user"></i>
                       <p>Login</p>
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
                               <i className="fa fa-lock"></i>
                               <input type="password" className="myinput" placeholder="Password" style={{border:"none"}}></input>
                           </label>
                       </div>
                       <div className="form-group">
                           <label className="my-0">
                              
                               <input type="button" className="form-control button" placeholder="Password" value="Login">

                               </input>
                           </label>
                       </div>
                   </form>
                   <label className="check_1">
                       <Link to="/signup">Need an account?</Link> 
                           
                       </label>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L1440,288L1440,320L0,320Z"></path></svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L60,26.7C120,21,240,11,360,5.3C480,0,600,0,720,21.3C840,43,960,85,1080,90.7C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
            </div>

        </div>


      
                              </div>  

    
    )
}

export default Login
