import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import Login from './Component/Login'
import Home from './Component/Home'
import Signup from './Component/Signup'
import Home1 from './Component/Home1'
import CreatePlan from './Component/CreatePlan'
import {useDispatch, useSelector} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import reducer from './reducer/Reducer'
import {Provider} from 'react-redux'
import Check from './Component/Check'
import CreatePlan1 from './Component/Createplan1'
import Plan from './Component/Plan'
import ViewMore from './Component/ViewMore';
import EditPlan from './Component/EditPlan'

import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import MyPlan from './Component/SMyPlan';

const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
function App() {

 
  return (
      <>
    <Provider store={store}>
    <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route exact path="/home" component={Home}></Route> 
            <Route exact path="/home/selectExercise" component={Home1}></Route>
            <Route path="/createplan" component={CreatePlan1}></Route>
            <Route path="/plan" component={Plan}></Route>
            <Route path="/viewmore" component={ViewMore}></Route>
            <Route path="/editplan" component={EditPlan}></Route>
            <Route path="/" component={MyPlan}></Route>
          </Switch>
    
    </BrowserRouter>
    <Check></Check>
    
    </Provider>     
    </>
     );
}

export default App;
